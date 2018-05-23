
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import {ApplicationStateContext } from 'store';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';
import { SettingsPanel } from 'ui/modules/SettingsPanel';
import { Header } from 'ui/modules/Header';
import { Footer } from 'ui/modules/Footer';

import { Modal } from 'ui/components/Modal';

import { consume } from 'utils/store';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface AppProps {
  className?: string;
  applicationState?: ApplicationStateStore;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class App extends React.Component<AppProps> {

  private handlers: BoundHandlers = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const { editMode, setEditMode, selectedTechnology, selectTechnology } = this.props.applicationState;

    return (
      <div className='c-app'>
        <Header />

        <main className='c-app__main'>
          <TechnologyRadar />

          <Modal
            open={ editMode }
            type='sidebar'
            onClose={ this.bindDisableEditMode(setEditMode) }>
            <SettingsPanel />
          </Modal>

          <Modal
            open={ Boolean(selectedTechnology) }
            onClose={ this.bindDeselectTechnology(selectTechnology) }>
            <TechnologyDetails />
          </Modal>
        </main>

        <Footer />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private bindDeselectTechnology(selectTechnology: Function) {
    if (!this.handlers.deselect) {
      this.handlers.deselect = () => selectTechnology(null);
    }

    return this.handlers.deselect;
  }

  private bindDisableEditMode(setEditMode: Function) {
    if (!this.handlers.disableEdit) {
      this.handlers.disableEdit = () => setEditMode(false);
    }

    return this.handlers.disableEdit as any;
  }
}
