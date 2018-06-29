
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, hydrate } from 'react-dom';

import { App } from 'ui/views/App';
import registerServiceWorker from './registerServiceWorker';

import { ApplicationStateProvider, TechnologyRadarProvider } from 'store';
import { canUseDOM } from 'utils/dom';

if (canUseDOM()) {
  import('what-input');
}

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
import applicationConfig from 'public/data.json';

const { application: applicationState, technologyRadar, application } = applicationConfig;

if (canUseDOM()) {
  document.title = application.title;
}

const Root = () => (
  <ApplicationStateProvider initialState={ applicationState }>
    <TechnologyRadarProvider initialState={{ ...technologyRadar, edited: false }}>
      <App />
    </TechnologyRadarProvider>
  </ApplicationStateProvider>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}


if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

// ----------------------------------------------------------------------------- Implementation
registerServiceWorker();
