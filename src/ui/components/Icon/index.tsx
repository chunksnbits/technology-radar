
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames, canUseDOM } from 'utils/dom';

import './styles.scss';
import assetsPath from './icon.symbols.svg';

// ----------------------------------------------------------------------------- Configuration
export interface IconProps {
  className?: string;
  name: string;
  width?: number;
  height?: number;
}

// ----------------------------------------------------------------------------- Implementation
export class Icon extends Component<IconProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentWillMount() {
    if (!canUseDOM() || document.getElementById('icons') !== null) {
      return;
    }

    const node = document.createElement('img');
    node.setAttribute('src', assetsPath);
    document.body.appendChild(node);
  }

  render() {
    return (
      <svg className={ classNames('c-icon', this.props.className) }
        xmlns='http://www.w3.org/2000/svg'
        width={ this.props.width }
        height={ this.props.height }
        preserveAspectRatio='xMidYMin'
        viewBox='0 0 24 24'>
        <use xlinkHref={ `${assetsPath.replace(/^\//, '')}#${ this.props.name }` } />
      </svg>
    );
  }

}
