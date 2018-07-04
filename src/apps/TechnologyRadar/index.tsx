
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { ApplicationStateProvider, TechnologyRadarProvider } from 'core/store';

import { GlobalThemeProvider, styled } from 'core/utils';
import { MainView } from 'core/ui/views';
import { GlobalBackgroundRoot, ModalRoot, CustomThemeProvider, LayoutProvider } from 'ui/components';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProps {
  data?: TechnologyRadarState;
  config?; ApplicationState;
  layout?: LayoutBreakpoints;
  theme?: ApplicationTheme;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TechnologyRadar extends PureComponent<TechnologyRadarProps> {

  static defaultProps = {
    data: require('public/data.json').technologyRadar,
    config: require('public/data.json').application,
    layout: require('public/layout.json'),
    theme: require('public/theme.json'),
  };

  render() {
    const { layout, theme, config, data } = this.props;

    return (
      <LayoutProvider layout={ layout }>
        <CustomThemeProvider theme={ theme }>
          <GlobalThemeProvider theme={ theme || require('public/theme.default.json') }>
            <ApplicationStateProvider state={ config }>
              <TechnologyRadarProvider state={ data }>
                <MainView />
                <ModalRoot />
                <GlobalBackgroundRoot />
              </TechnologyRadarProvider>
            </ApplicationStateProvider>
          </GlobalThemeProvider>
        </CustomThemeProvider>
      </LayoutProvider>
    );
  }
}
