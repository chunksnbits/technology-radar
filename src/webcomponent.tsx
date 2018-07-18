
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { bootstrapWebComponent, registerServiceWorker } from 'utils';
import { Webcomponent, TechnologyRadarProps } from 'ui/views';

// ----------------------------------------------------------------------------- Configuration
const defaults: TechnologyRadarProps = {
  layout: require('public/layout.json'),
  theme: require('public/theme.json'),
  applicationConfig: null,
  data: null,
};

// ----------------------------------------------------------------------------- Implementation
bootstrapWebComponent(<Webcomponent { ...defaults } />, 'technology-radar');
registerServiceWorker();
