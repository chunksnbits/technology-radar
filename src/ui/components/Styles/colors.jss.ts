import * as color from 'color';

export function rgba(colorString: string, value: number): string {
  return color(colorString).fade(1 - value).toString();
}

export function mix(colorString: string, other: string, value: number): string {
  return color(colorString).mix(color(other), value).toString();
}
export const backgroundColor = (theme: ApplicationTheme): string => theme.backgroundTextContent || theme.base;
export const textColor = (theme: ApplicationTheme): string => theme.textContent || theme.primary;
