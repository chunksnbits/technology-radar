
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { App } from 'ui/views/App';
import { ApplicationState, ApplicationStateImpl } from 'store/application-state';

import registerServiceWorker from './registerServiceWorker';
import technologyRadar from 'public/data.json';

import './styles.scss';
import { TechnologyRadarState } from 'store/technology-radar';

// ----------------------------------------------------------------------------- Configuration
const rootNode = document.getElementById('root') as HTMLElement;
const state = new ApplicationStateImpl({ technologyRadar });

configure({ enforceActions: true });

// ----------------------------------------------------------------------------- Implementation
ReactDOM.render((
  <ApplicationState.Provider value={ state }>
    <TechnologyRadarState.Provider value={ state.technologyRadar }>
      <App />
    </TechnologyRadarState.Provider>
  </ApplicationState.Provider>
), rootNode);

registerServiceWorker();
