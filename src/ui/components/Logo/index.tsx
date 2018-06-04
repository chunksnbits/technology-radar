
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import * as logoSrc from 'public/logo.symbols.svg';

// ----------------------------------------------------------------------------- Configuration
export interface LogoProps {
  className?: string;
  name: string;
  color?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class Logo extends Component<LogoProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <svg className={ classNames('c-logo', this.props.className) }
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMin'
        viewBox='0 0 24 24'
        style={{ fill: this.props.color }}>
        <use xlinkHref={ `${ logoSrc }#${ this.props.name }` } />
      </svg>
    );
  }
}
