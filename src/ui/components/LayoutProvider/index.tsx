
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Context, createContext, createRef } from 'react';
import * as React from 'react';
import { debounce, canUseDOM, offsetRoot, classNames } from 'utils';

// ----------------------------------------------------------------------------- Configuration
export interface LayoutProviderProps {
  layout?: LayoutBreakpoints;
}

export interface LayoutProviderState {
  layout?: LayoutBreakpoints;
  active: Breakpoint;
  orientation: DeviceOrientation;
}

export type Layout = LayoutProviderState;

export const LayoutProviderContext: Context<LayoutProviderState> = createContext({} as any);

export const LAYOUT_BASE_CLASS = 'g-layout';

export const LAYOUT_CLASSES = {
  small: `${ LAYOUT_BASE_CLASS }--small`,
  medium: `${ LAYOUT_BASE_CLASS }--medium`,
  large: `${ LAYOUT_BASE_CLASS }--large`,
};

// ----------------------------------------------------------------------------- Implementation
export class LayoutProvider extends PureComponent<LayoutProviderProps, LayoutProviderState> {
  private elementRef: React.RefObject<HTMLDivElement>;

  constructor(props: LayoutProviderProps) {
    super(props);

    this.elementRef = createRef();

    this.state = {
      layout: props.layout || require('public/layout.default.json'),
      active: 'medium',
      orientation: this.detectOrientation(),
    };
  }

  componentWillUnmount() {
    if (canUseDOM()) {
      window.removeEventListener('resize', this.windowResizeHandler);
    }
  }

  componentDidMount() {
    if (canUseDOM()) {
      window.addEventListener('resize', this.windowResizeHandler);
    }

    this.windowResizeHandler();
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div ref={ this.elementRef } className={ classNames(LAYOUT_BASE_CLASS, LAYOUT_CLASSES[this.state.active]) }>
        <LayoutProviderContext.Provider value={ Object.assign({}, this.state) }>
          { this.props.children }
        </LayoutProviderContext.Provider>
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private windowResizeHandler = () => {
    debounce('laoutProvider', () => {
      this.setState(() => ({
        active: this.detectActiveBreakpoint(this.getScreenSize(), this.state.layout),
      }));
    });
  }

  private getScreenSize(): ScreenSize {
    if (!canUseDOM() || !Boolean(this.elementRef.current)) {
      return null;
    }

    const root = offsetRoot(this.elementRef.current);

    return {
      width: (root as Element).clientWidth || (root as Window).innerWidth,
      height: (root as Element).clientHeight || (root as Window).innerWidth,
    };
  }

  private detectActiveBreakpoint(screenSizes: ScreenSize, layout: LayoutBreakpoints): Breakpoint {
    if (!Boolean(screenSizes)) {
      return 'medium';
    }

    const { width } = screenSizes;

    if (width < layout.medium) {
      return 'small';
    } else if (width < layout.large) {
      return 'medium';
    } else {
      return 'large';
    }
  }

  private detectOrientation(): DeviceOrientation {
    if (!canUseDOM()) {
      return 'landscape';
    }

    return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  }
}
