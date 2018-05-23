
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TabContainerProps {
  className?: string;
  active: boolean;
}

// ----------------------------------------------------------------------------- Implementation
export class TabContainer extends Component<TabContainerProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const modifiers = [
      this.props.active && 'c-tab-container--active'
    ];

    return (
      <div className={ classNames('c-tab-container', this.props.className, ...modifiers) }>
        { this.props.children }
      </div>
    );
  }
}
