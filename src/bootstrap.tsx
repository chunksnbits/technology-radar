
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { render, hydrate } from 'react-dom';

import { ApplicationStateProvider, TechnologyRadarProvider } from 'store';
import { canUseDOM } from 'utils/dom';

if (canUseDOM()) {
  import('what-input');
}

// ----------------------------------------------------------------------------- Implementation
export function bootstrap(AppElement: any, rootElement: HTMLElement, config: ApplicationConfig): void {
  const { application: applicationState, technologyRadar, application } = config;

  const Root = () => (
    <ApplicationStateProvider initialState={ applicationState }>
      <TechnologyRadarProvider initialState={{ ...technologyRadar, edited: false }}>
        <AppElement />
      </TechnologyRadarProvider>
    </ApplicationStateProvider>
  );

  if (canUseDOM()) {
    document.title = application.title;
  }

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
}