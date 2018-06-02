
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
  position?: 'above' | 'below' | 'auto';
}

// ----------------------------------------------------------------------------- Implementation
export class GlobalBackground extends PureComponent<GlobalBackgroundProps> {

  private rootClassName: string = 'g-global-background';

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (!canUseDOM() || document.getElementById(this.rootClassName) === null) {
      return null;
    }

    const container = document.getElementById('g-global-background');

    container.classList.add(`g-global-backgound--${ this.props.position || 'auto' }`)

    return createPortal(this.renderContent(), container);
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
