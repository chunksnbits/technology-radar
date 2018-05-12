
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import { createPortal } from 'react-dom';

import * as React from 'react';

import { classNames } from 'utils/dom';
import { observer } from 'mobx-react';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  applicationState: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class TechnologyDetails extends Component<TechnologyDetailsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return createPortal(this.renderDialog(this.props), document.querySelector('#g-modal'));
  }

  // ----------------------------------------------------------------------------- Event handler methods
  handleClose = () => {
    this.props.applicationState.selectTechnology(null);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  renderDialog(props: TechnologyDetailsProps) {

    const { selectedTechnology } = props.applicationState;

    const modifiers = [];

    return (
      <dialog
        className={ classNames('c-technology-details', this.props.className, ...modifiers) }
        open={ Boolean(selectedTechnology) }>
        <nav>
          <button onClick={this.handleClose}>
            X
          </button>
        </nav>

        { selectedTechnology && (
            <div>
              { selectedTechnology.name }
            </div>
          )
        }
      </dialog>
    );
  }
}
