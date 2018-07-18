
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Context, createContext } from 'react';
import * as React from 'react';
import produce from 'immer';

// ----------------------------------------------------------------------------- Configuration
export interface LayoutStateProviderProps {
  layout?: ApplicationLayout;
}

export const LayoutContext: Context<LayoutStore> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
export class LayoutProvider extends PureComponent<LayoutStateProviderProps, LayoutStore> implements LayoutActions {

  constructor(props: LayoutStateProviderProps) {
    super(props);

    this.state = {
      ...props.layout,

      activeBreakpoint: 'medium',
      orientation: 'portrait',

      setActiveBreakpoint: this.setActiveBreakpoint.bind(this),
      setDeviceOrientation: this.setDeviceOrientation.bind(this),
    };
  }

  render() {
    return (
      <LayoutContext.Provider value={ this.state }>
        { this.props.children }
      </LayoutContext.Provider>
    );
  }

  setActiveBreakpoint(breakpoint: Breakpoint): void {
    this.setState(state => produce(state, (draftState: LayoutStore) => {
      draftState.activeBreakpoint = breakpoint;

      return draftState;
    }));
  }

  setDeviceOrientation(orientation: DeviceOrientation): void {
    this.setState(state => produce(state, (draftState: LayoutStore) => {
      draftState.orientation = orientation;

      return draftState;
    }));
  }

}
