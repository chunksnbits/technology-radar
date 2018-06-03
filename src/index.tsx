
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, hydrate } from 'react-dom';

import { App } from 'ui/views/App';
import registerServiceWorker from './registerServiceWorker';

import { ApplicationStateStore, TechnologyRadarStore } from 'store';
import { canUseDOM } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
import applicationConfig from 'public/data/data.json';

const { application: applicationState, technologyRadar, application } = applicationConfig;

if (canUseDOM()) {
  document.title = application.title;
}

const Root = () => (
  <ApplicationStateStore initialState={ applicationState }>
    <TechnologyRadarStore initialState={{ ...technologyRadar, edited: false }}>
      <App />
    </TechnologyRadarStore>
  </ApplicationStateStore>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

// ----------------------------------------------------------------------------- Implementation
registerServiceWorker();
