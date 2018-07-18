
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { ApplicationStateContext } from 'store';

import { classNames, consume, styled } from 'utils';

import { ViewToggle } from './components/view-toggle';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  classes?: Classes;
  viewMode?: ViewMode;
  toggleViewMode?: () => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { select: ['viewMode', 'toggleViewMode'] })
@styled(styles)
export class Footer extends PureComponent<FooterProps> {

  handlers: BoundHandlers<any> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { viewMode, classes } = this.props;

    return (
      <footer className={ classNames(classes.root, this.props.className) }>
        <div className={ classes.footerActions }>
          <ViewToggle viewMode={ viewMode } onClick={ this.toggleListViewHandler } />
        </div>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private toggleListViewHandler = () => {
    this.props.toggleViewMode();
  }
}
