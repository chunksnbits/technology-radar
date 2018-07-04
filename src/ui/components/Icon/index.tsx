
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';
import { Classes } from 'jss';

import { styled, classNames } from 'core/utils';

import * as iconSrc from 'public/icon.symbols.svg';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface IconProps {
  className?: string;
  color?: string;
  classes?: Classes;
  name: string;
  size?: number | string;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class Icon extends PureComponent<IconProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { className, name, size, classes, color } = this.props;

    const sizePx = this.isNumberLike(size) ? `${ size }px` : size;

    return (
      <svg className={ classNames(classes.root, className) }
        xmlns='http://www.w3.org/2000/svg'
        style={{
          width: sizePx,
          height: sizePx,
          fill: color,
        }}
        preserveAspectRatio='xMidYMin'
        viewBox='0 0 24 24'>
        <use xlinkHref={ `${ iconSrc }#${ name }` } />
      </svg>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private isNumberLike(value: number | string): boolean {
    return !isNaN(Number(value));
  }
}
