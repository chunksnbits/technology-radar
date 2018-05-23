
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { App } from 'ui/views/App';
import registerServiceWorker from './registerServiceWorker';
import technologyRadar from 'public/data.json';

import { ApplicationStateStore, TechnologyRadarStore } from 'store';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
const rootNode = document.getElementById('root') as HTMLElement;

configure({ enforceActions: true });

// ----------------------------------------------------------------------------- Implementation
ReactDOM.render((
  <ApplicationStateStore>
    <TechnologyRadarStore initialState={{ ...technologyRadar, edited: false }}>
      <App />
    </TechnologyRadarStore>
  </ApplicationStateStore>
), rootNode);

registerServiceWorker();
