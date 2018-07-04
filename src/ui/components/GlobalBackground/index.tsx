// tslint:disable:max-classes-per-file

// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as React from 'react';
import { Classes } from 'jss';

import { classNames, canUseDOM, styled } from 'core/utils';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
const ANCHOR_ID = 'g-global-background';

export interface GlobalBackgroundProps {
  children?: ReactNode;
  classes?: Classes;
  theme?: ApplicationTheme;
  className?: string;
  position?: 'above' | 'below' | 'auto';
}

@styled(styles)
export class GlobalBackgroundRoot extends PureComponent<GlobalBackgroundProps> {
  render() {
    const { classes } = this.props;

    return (
      <div id={ ANCHOR_ID } className={ classes.globalBackgroundAnchor } />
    );
  }
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class GlobalBackground extends PureComponent<GlobalBackgroundProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (!canUseDOM()) {
      return null;
    }

    const { position } = this.props;

    try {
      const container = document.querySelector(`technology-radar::shadow #${ANCHOR_ID}`);

      if (container === null) {
        console.warn('[GLOBAL_BACKGROUND] <GlobalBackgroundRoot /> element not found. Be sure to attach.');
        return null;
      }

      container.classList.add(`c-global-background--${ position || 'auto' }`)

      return createPortal(this.renderContent(), container);
    } catch (error) {
      console.warn('[GLOBAL_BACKGROUND] Failed to access global background.');
    }

    return null;
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderContent() {
    const { classes, className, children } = this.props;

    return (
      <div className={ classNames(classes.globalBackground, className) }>
        { children }
      </div>
    );
  }
}
