
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { styled, classNames } from 'core/utils';

import * as logoSrc from 'public/logo.symbols.svg';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface LogoProps {
  className?: string;
  classes?: Classes;
  name: string;
  color?: string;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class Logo extends PureComponent<LogoProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { classes, className, color, name } = this.props;

    return (
      <svg className={ classNames(classes.root, className) }
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMin'
        viewBox='0 0 24 24'
        style={{
          fill: color,
        }}>
        <use xlinkHref={ `${ logoSrc }#${ name }` } />
      </svg>
    );
  }
}
