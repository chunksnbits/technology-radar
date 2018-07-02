
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { ApplicationStateProvider, TechnologyRadarProvider } from 'core/store';
import { canUseDOM } from 'core/utils';
import { MainView } from 'core/ui/views';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
import applicationConfig from 'public/data.json';

const { application, technologyRadar } = applicationConfig;

if (canUseDOM()) {
  document.title = application.title;
}

// ----------------------------------------------------------------------------- Implementation
export const TechnologyRadar = () => (
  <ApplicationStateProvider initialState={ application }>
    <TechnologyRadarProvider initialState={ technologyRadar }>
      <MainView />
    </TechnologyRadarProvider>
  </ApplicationStateProvider>
);
