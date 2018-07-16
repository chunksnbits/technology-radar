
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { LayoutContext } from 'store';
import { classNames, styled, consume } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface AspectRatioProps {
  className?: string;
  classes?: Classes;
  orientation?: DeviceOrientation;
  ratio: number;
}

// ----------------------------------------------------------------------------- Implementation
@consume(LayoutContext, { select: ['orientation'] })
@styled(styles)
export class AspectRatio extends PureComponent<AspectRatioProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { ratio, className, classes, orientation } = this.props;

    const modificators = [
      orientation === 'landscape' ? classes.aspectRatioLandscape : classes.aspectRatioPortrait,
    ]

    return (
      <svg className={ classNames(classes.aspectRatioRoot, className, ...modificators) }
        viewBox={ `0 0 100 ${ 100 * ratio }` }
        preserveAspectRatio='xMidYMid slice'>

        <rect width={ 100 } height={ 100 * ratio } fill='none' />
      </svg>
    );
  }
}
