
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as React from 'react';

import { classNames, canUseDOM } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface GlobalBackgroundProps {
  children: ReactNode;
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class GlobalBackground extends PureComponent<GlobalBackgroundProps> {

  private rootClassName: string = 'c-global-background';

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (!canUseDOM() || document.getElementById(this.rootClassName) === null) {
      return null;
    }

    return createPortal(this.renderContent(), document.getElementById('g-global-background'));
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private renderContent() {
    const modifiers = [];

    return (
      <div className={ classNames(this.rootClassName, this.props.className, ...modifiers) }>
        { this.props.children }
      </div>
    );
  }
}
