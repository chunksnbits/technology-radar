
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { observer } from 'mobx-react';

import { ApplicationState, ApplicationStateImpl } from 'store/application-state';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';
import { SettingsPanel } from 'ui/modules/SettingsPanel';
import { Header } from 'ui/modules/Header';
import { Footer } from 'ui/modules/Footer';

import { Modal } from 'ui/components/Modal';
import { TechnologyRadarState } from 'store/technology-radar';

import technologyRadar from 'public/data.json';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface AppProps {
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class App extends React.Component<AppProps, ApplicationStateImpl> {

  private handlers: BoundHandlers = {};

  constructor(props: AppProps) {
    super(props);

    this.state = new ApplicationStateImpl({ technologyRadar }, this);
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ApplicationState.Provider value={ this.state as any }>
        <TechnologyRadarState.Provider value={ this.state.technologyRadar }>
          <div className='c-app'>
            <Header />

            <main className='c-app__main'>
              <TechnologyRadar />

              <Modal
                open={ this.state.editMode }
                type='sidebar'
                onClose={ this.bindDisableEditMode(this.state.setEditMode) }>
                <SettingsPanel />
              </Modal>

              <Modal
                open={ Boolean(this.state.selectedTechnology) }
                onClose={ this.bindDeselectTechnology(this.state.selectTechnology) }>
                <TechnologyDetails />
              </Modal>
            </main>

            <Footer />
          </div>
        </TechnologyRadarState.Provider>
      </ApplicationState.Provider>
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
