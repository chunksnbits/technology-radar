
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Context, createContext } from 'react';
import * as React from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface ThemeProviderProps {
  theme?: ApplicationTheme;
}

export interface ThemeProviderState {
  theme?: ApplicationTheme;
}

export const ThemeProviderContext: Context<CustomThemeProvider> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
export class CustomThemeProvider extends PureComponent<ThemeProviderProps, ThemeProviderState> {
  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ThemeProviderContext.Provider value={ Object.assign({}, this, this.props.theme) }>
        { this.props.children }
      </ThemeProviderContext.Provider>
    );
  }
}
