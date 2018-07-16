import { PureComponent, Context } from 'react';
export interface ThemeProviderProps {
    theme?: ApplicationTheme;
}
export interface ThemeProviderState {
    theme?: ApplicationTheme;
}
export declare const ThemeProviderContext: Context<CustomThemeProvider>;
export declare class CustomThemeProvider extends PureComponent<ThemeProviderProps, ThemeProviderState> {
    render(): JSX.Element;
}
