

// ----------------------------------------------------------------------------- Dependencies
import { Children, PureComponent, ReactNode } from 'react';
import * as React from 'react';

import { styled, classNames } from 'utils';

import { Tabs } from '@material-ui/core';
import { Classes } from 'jss';

import { TabBody } from '../TabContainer';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TabsWrapperProps {
  className?: string;
  classes?: Classes;
  fixed?: boolean;
  sticky?: boolean;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TabsWrapper extends PureComponent<TabsWrapperProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { children, className, classes, sticky, fixed } = this.props;

    const modifiers = [
      sticky && classes.tabsWrapperSticky,
      fixed && classes.tabsWrapperFixed,
    ]

    return (
      <div className={ classNames(classes.root, className, ...modifiers) }>
        <div className={ classes.tabsWrapperHeader }
          style={{
          }}>
          { this.getTabsHeader(children) }
        </div>

        <div className={ classes.tabsWrapperBody }
          style={{
            transform: `translateX(${ this.getActiveTabIndex(children) * -100}%)`,
          }
        }>
          { this.getTabsBody(children) }
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  getTabsHeader(children: ReactNode) {
    return Children.toArray(children).filter(child => (child as any).type === Tabs);
  }

  getTabsBody(children: ReactNode) {
    return Children.toArray(children).filter(child => (child as any).type === TabBody);
  }

  getActiveTabIndex(children: ReactNode) {
    return this.getTabsBody(children).findIndex(tab => (tab as any).props.active);
  }
}
