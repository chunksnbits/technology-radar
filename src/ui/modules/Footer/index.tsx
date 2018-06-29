
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
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
  editor?: boolean;
  viewMode?: ViewMode;
  owner?: boolean;
  createNew?: () => void;
  edit?: () => void;
  toggleViewMode?: () => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { select: ['editor', 'viewMode', 'owner', 'toggleViewMode'] })
@consume(TechnologyRadarContext, { select: ['createNew', 'edit'] })
export class Footer extends PureComponent<FooterProps> {

  handlers: BoundHandlers<any> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { editor, viewMode, owner } = this.props;

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
    this.props.createNew();
  }

  private toggleEditModeHandler = () => {
    this.props.edit();
  }

  private toggleListViewHandler = () => {
    this.props.toggleViewMode();
  }
}
