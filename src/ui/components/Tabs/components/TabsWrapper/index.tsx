

// ----------------------------------------------------------------------------- Dependencies
import { Children, PureComponent } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Tabs } from '@material-ui/core';
import { TabBody } from '../TabContainer';

// ----------------------------------------------------------------------------- Configuration
export interface TabsWrapperProps {
  className?: string;
  fixed?: boolean;
  sticky?: boolean;
}

// ----------------------------------------------------------------------------- Implementation
export class TabsWrapper extends PureComponent<TabsWrapperProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [
      this.props.sticky && 'c-tabs-wrapper--sticky',
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
    return Children.toArray(this.props.children).filter(child => (child as any).type === TabBody);
  }

  get activeTabIndex() {
    return this.tabsBody.findIndex(tab => (tab as any).props.active);
  }
}
