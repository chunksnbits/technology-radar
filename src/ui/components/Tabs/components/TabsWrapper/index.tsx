

// ----------------------------------------------------------------------------- Dependencies
import { Children, Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Tabs } from '@material-ui/core';
import { TabContainer } from '../TabContainer';

// ----------------------------------------------------------------------------- Configuration
export interface TabsWrapperProps {
  className?: string;
  fixed?: boolean;
}

// ----------------------------------------------------------------------------- Implementation
export class TabsWrapper extends Component<TabsWrapperProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [
      this.props.fixed && 'c-tabs-wrapper--fixed'
    ]

    return (
      <div className={ classNames('c-tabs-wrapper', this.props.className, ...modifiers) }>
        <div className='c-tabs-wrapper__header'>
          { this.tabsHeader }
        </div>

        <div className='c-tabs-wrapper__body'
          style={{
            transform: `translateX(${ this.activeTabIndex * -100}%)`
          }
        }>
          { this.tabsBody }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  get tabsHeader() {
    return Children.toArray(this.props.children).filter(child => (child as any).type === Tabs);
  }

  get tabsBody() {
    return Children.toArray(this.props.children).filter(child => (child as any).type === TabContainer);
  }

  get activeTabIndex() {
    return this.tabsBody.findIndex(tab => (tab as any).props.active);
  }
}
