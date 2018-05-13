
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { observer } from 'mobx-react';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';
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

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, groups, title, logo } = this.props.applicationState;

    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <img className='c-app__logo' src={ logo } />
          <h1 className='c-app__title'>{ title }</h1>
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
