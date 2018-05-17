
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { observer } from 'mobx-react';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';
import { SettingsPanel } from 'ui/modules/SettingsPanel';

import { Modal } from 'ui/components/Modal';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface AppProps {
  applicationState: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class App extends React.Component<AppProps> {

  // ----------------------------------------------------------------------------- Event handler methods
  handleDeselectTechnology = () => {
    this.props.applicationState.selectTechnology(null);
  }

  bindSetEditModeHandler = (value: boolean) => {
    return () => this.props.applicationState.setEditMode(value);
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, technologyRadar, title, logo, editMode } = this.props.applicationState;
    const { groups } = technologyRadar;

    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <img className='c-app__logo' src={ logo } />
          <h1 className='c-app__title'>{ title }</h1>
        </header>

        <main className='c-app__main'>
          <TechnologyRadar applicationState={ this.props.applicationState } />

          <Modal
            open={ editMode }
            type='sidebar'
            onClose={ this.bindSetEditModeHandler(false) }>
            <SettingsPanel applicationState={ this.props.applicationState } />
          </Modal>

          <Modal
            open={ Boolean(selectedTechnology) }
            onClose={ this.handleDeselectTechnology }>
            <TechnologyDetails
              selectedTechnology={ selectedTechnology }
              groups={ groups } />
          </Modal>
        </main>

        <footer className='c-app__footer'>
          <button className='c-app__action c-app__action--edit-mode' onClick={ this.bindSetEditModeHandler(true) }>
            Create your own
          </button>
        </footer>
      </div>
    );
  }
}
