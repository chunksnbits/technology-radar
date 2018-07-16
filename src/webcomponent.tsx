

import * as React from 'react';

import { bootstrapWecomponent } from 'core/utils/bootstrap';
import { Webcomponent } from 'core/apps';
import registerServiceWorker from './registerServiceWorker';

const defaults = {
  layout: require('public/layout.json'),
  theme: require('public/theme.json'),
  config: null,
  data: null,
};

bootstrapWecomponent(<Webcomponent { ...defaults } />, 'technology-radar');
registerServiceWorker();
