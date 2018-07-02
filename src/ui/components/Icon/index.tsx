
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'core/utils/dom';

import './styles.scss';
import * as iconSrc from 'public/icon.symbols.svg';

// ----------------------------------------------------------------------------- Configuration
export interface IconProps {
  className?: string;
  name: string;
  size?: number | string;
}

// ----------------------------------------------------------------------------- Implementation
export class Icon extends PureComponent<IconProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
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
        <use xlinkHref={ `${ iconSrc }#${ this.props.name }` } />
      </svg>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isNumberLike(value: number | string): boolean {
    return !isNaN(Number(value));
  }
}
