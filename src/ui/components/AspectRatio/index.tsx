
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { classNames, styled, consume } from 'utils';

import { styles } from './styles.jss';
import { LayoutProviderContext, Layout } from '../LayoutProvider';

// ----------------------------------------------------------------------------- Configuration
export interface AspectRatioProps {
  className?: string;
  classes?: Classes;
  layout?: Layout;
  ratio: number;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
@consume(LayoutProviderContext, { bindTo: 'layout' })
export class AspectRatio extends PureComponent<AspectRatioProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { ratio, className, classes, layout } = this.props;

    const modificators = [
      layout.orientation === 'landscape' ? classes.aspectRatioLandscape : classes.aspectRatioPortrait,
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
