
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, createRef } from 'react';
import * as React from 'react';

import { classNames, canUseDOM, debounce, consume, offsetRoot } from 'utils';
import { LayoutContext } from 'store';
import { LAYOUT_BASE_CLASS, LAYOUT_CLASSES } from '../Styles';

// ----------------------------------------------------------------------------- Configuration
export interface LayoutMonitorProps {
  className?: string;
  breakpoints?: LayoutBreakpoints;
  activeBreakpoint?: Breakpoint;
  orientation?: DeviceOrientation;
  setActiveBreakpoint?: (breakpoint: Breakpoint) => void;
  setDeviceOrientation?: (orientation: DeviceOrientation) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(LayoutContext, {
  select: [
    'activeBreakpoint',
    'breakpoints',
    'orientation',
    'setActiveBreakpoint',
    'setDeviceOrientation',
  ],
})
export class LayoutMonitor extends PureComponent<LayoutMonitorProps> {
  private elementRef: React.RefObject<HTMLDivElement>;

  constructor(props: LayoutMonitorProps) {
    super(props);

    this.elementRef = createRef();
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
    const { activeBreakpoint, children } = this.props;

    return (
      <div ref={ this.elementRef } className={ classNames(LAYOUT_BASE_CLASS, LAYOUT_CLASSES[activeBreakpoint]) }>
        { children }
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private windowResizeHandler = () => {
    debounce('layout-monitor', () => {
      this.props.setActiveBreakpoint(this.detectActiveBreakpoint(this.getScreenSize(), this.props.breakpoints))
      this.props.setDeviceOrientation(this.detectOrientation());
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
    if (!Boolean(screenSizes) || !Boolean(layout)) {
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
