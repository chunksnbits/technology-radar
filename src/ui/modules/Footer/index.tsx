
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import { ViewToggle } from './components/view-toggle';
import { CreateNewAction } from './components/create-new-action';
import { EditModeToggle } from './components/edit-mode-toggle';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
export class Footer extends Component<FooterProps> {

  handlers: BoundHandlers<any> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { editor, viewMode, owner } = this.props.applicationState;

    return (
      <footer className={ classNames('c-footer', this.props.className) }>
        <div className='c-footer__actions'>
          <ViewToggle viewMode={ viewMode }
            onClick={ this.toggleListViewHandler }
            className='c-footer__action c-footer__action--togle-view' />

          <CreateNewAction show={ owner }
            onClick={ this.createNewHandler }
            className='c-footer__action c-footer__action--create-new' />

          <EditModeToggle show={ editor }
            onClick={ this.toggleEditModeHandler }
            className='c-footer__action c-footer__action--toggle-edit' />
        </div>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private createNewHandler = () => {
    this.props.technologyRadar.createNew();
  }

  private toggleEditModeHandler = () => {
    this.props.technologyRadar.edit();
  }

  private toggleListViewHandler = () => {
    this.props.applicationState.toggleViewMode();
  }
}