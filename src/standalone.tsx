import * as React from 'react';
import { bootstrap } from 'core/utils/bootstrap';
import { TechnologyRadar } from 'core/apps';
import registerServiceWorker from './registerServiceWorker';

const defaults = {
  data: require('public/data.json').technologyRadar,
  config: require('public/data.json').application,
  layout: require('public/layout.json'),
  theme: require('public/theme.json'),
};

bootstrap(<TechnologyRadar { ...defaults } />, document.querySelector('technology-radar'));
registerServiceWorker();
