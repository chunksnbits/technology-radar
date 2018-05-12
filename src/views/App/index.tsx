
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { observer } from 'mobx-react';

import { TechnologyRadar } from 'components/TechnologyRadar';
import { TechnologyDetails } from 'components/TechnologyDetails';
import { Modal } from 'components/Modal';

import './styles.scss';

import logo from './logo.svg';

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

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, groups } = this.props.applicationState;

    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <img className='c-app__logo' src={ logo } />
          <h1 className='c-app__title'>Welcome to React</h1>
        </header>

        <main className='c-app__main'>
          <TechnologyRadar applicationState={ this.props.applicationState } />

          <Modal open={ Boolean(selectedTechnology) }
            onClose={ this.handleDeselectTechnology }>
            <TechnologyDetails
              selectedTechnology={ selectedTechnology }
              groups={ groups } />
          </Modal>
        </main>
      </div>
    );
  }
}
