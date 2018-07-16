
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { bootstrap, registerServiceWorker, canUseDOM } from 'utils';
import { TechnologyRadar, TechnologyRadarProps } from 'ui/views';

// ----------------------------------------------------------------------------- Configuration
import applicationConfig from 'public/application-config.json';

const defaults: TechnologyRadarProps = {
  data: require('public/data.json'),
  applicationConfig,
  layout: require('public/layout.json'),
  theme: require('public/theme.json'),
};

if (canUseDOM()) {
  document.title = [applicationConfig.title, applicationConfig.subtitle].filter(text => Boolean(text)).join(' - ');
}

// ----------------------------------------------------------------------------- Implementation
bootstrap(<TechnologyRadar { ...defaults } />, document.querySelector('technology-radar'));
registerServiceWorker();
