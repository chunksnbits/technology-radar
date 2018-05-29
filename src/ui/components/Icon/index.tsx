
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames, canUseDOM } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface IconProps {
  className?: string;
  name: string;
  size?: number | string;
}

// ----------------------------------------------------------------------------- Implementation
export class Icon extends Component<IconProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentWillMount() {
    if (!canUseDOM() || document.getElementById('icons') !== null) {
      return;
    }

    const node = document.createElement('img');
    document.body.appendChild(node);
  }

  render() {
    const size = this.isNumberLike(this.props.size) ? `${ this.props.size }px` : this.props.size;
    return (
      <svg className={ classNames('c-icon', this.props.className) }
        xmlns='http://www.w3.org/2000/svg'
        style={{
          width: size,
          height: size
        }}
        preserveAspectRatio='xMidYMin'
        viewBox='0 0 24 24'>
        <use xlinkHref={ `/assets/icon.symbols.svg#${ this.props.name }` } />
      </svg>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isNumberLike(value: number | string): boolean {
    return !isNaN(Number(value));
  }
}
