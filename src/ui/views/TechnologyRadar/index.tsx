
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { ApplicationStateProvider, TechnologyRadarProvider, ThemeProvider, LayoutProvider } from 'store';

import { styled } from 'utils';
import { MainView } from '..';
import { GlobalBackgroundRoot, ModalRoot, LayoutMonitor } from '../../components';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  data?: ApplicationData;
  applicationConfig?: ApplicationConfig;
  layout?: ApplicationLayout;
  theme?: ApplicationTheme;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TechnologyRadar extends PureComponent<Partial<TechnologyRadarProps>> {
  render() {
    const { layout, theme, applicationConfig, data } = this.props;

    return (
      <LayoutProvider layout={ layout }>
        <ThemeProvider theme={ theme }>
          <ApplicationStateProvider state={ applicationConfig }>
            <TechnologyRadarProvider state={ data }>
              <LayoutMonitor>
                <MainView />
                <ModalRoot />
                <GlobalBackgroundRoot />
              </LayoutMonitor>
            </TechnologyRadarProvider>
          </ApplicationStateProvider>
        </ThemeProvider>
      </LayoutProvider>
    );
  }
}
