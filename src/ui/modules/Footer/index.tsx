
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { ApplicationStateContext } from 'core/store';

import { consume } from 'core/utils/store';
import { classNames } from 'core/utils/dom';

import { ViewToggle } from './components/view-toggle';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  viewMode?: ViewMode;
  toggleViewMode?: () => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { select: ['viewMode', 'toggleViewMode'] })
export class Footer extends PureComponent<FooterProps> {

  handlers: BoundHandlers<any> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { viewMode } = this.props;

    return (
      <footer className={ classNames('c-footer', this.props.className) }>
        <div className='c-footer__actions'>
          <ViewToggle viewMode={ viewMode }
            onClick={ this.toggleListViewHandler }
            className='c-footer__action c-footer__action--togle-view' />
        </div>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private toggleListViewHandler = () => {
    this.props.toggleViewMode();
  }
}
