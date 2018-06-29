
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createContext, PureComponent, Context } from 'react';
import produce from 'immer';

import { canUseSessionStorage } from 'utils/dom';
import { restoreState } from 'utils/store';
import { merge } from 'utils/collection';

import theme from 'public/theme.json';

import { defaultState } from './constants';

// ----------------------------------------------------------------------------- Configuration
export interface ApplicationStateProps {
  initialState?: ApplicationState;
}

const SESSION_STORAGE_KEY = 'cnb--application-state';

export const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions> = createContext({} as any);

export class ApplicationStateProvider
  extends PureComponent<ApplicationStateProps, ApplicationState & ApplicationStateActions>
  implements ApplicationStateActions
{
  constructor(props: ApplicationStateProps) {
    super(props);

    const initialState = merge(defaultState, props.initialState);

    this.state = {
      ...initialState,

      reset: this.reset.bind(this),
      focusTechnology: this.focusTechnology.bind(this),
      selectTechnology: this.selectTechnology.bind(this),
      selectGroup: this.selectGroup.bind(this),
      setEditMode: this.setEditMode.bind(this),
      setOwner: this.setOwner.bind(this),
      updateBreakpoint: this.updateBreakpoint.bind(this),
      toggleViewMode: this.toggleViewMode.bind(this),
    };
  }

  componentWillMount() {
    this.restoreState();
  }

  render() {
    return (
      <ApplicationStateContext.Provider value={ this.state }>
        { this.props.children }
      </ApplicationStateContext.Provider>
    );
  }

  // ----------------------------------------------------------------------------- Action methods
  updateBreakpoint(width: number): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      if (width < theme.breakpoints.medium) {
        draftState.breakpoint = 'small';
      } else if (width < theme.breakpoints.large) {
        draftState.breakpoint = 'medium';
      } else {
        draftState.breakpoint = 'large';
      }


      return draftState;
    }));
  }

  reset(): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = null;
      draftState.selectedGroup = null;
      draftState.editMode = false;

      return draftState;
    }));
  }

  focusTechnology(focused: Technology): void {
    if (focused === this.state.focusedTechnology) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.focusedTechnology = focused;

      return draftState;
    }));
  }

  selectTechnology(selected: Technology): void {
    if (selected === this.state.selectedTechnology) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = selected;

      return draftState;
    }));
  }

  selectGroup(selected: Group): void {
    if (selected === this.state.selectedGroup) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedGroup = selected;

      return draftState;
    }));
  }

  setOwner(value: boolean): void {
    if (value === this.state.owner) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.owner = value;

      return draftState;
    }));
  }

  setEditMode(value: boolean): void {
    if (value === this.state.editMode) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.editMode = value;

      return draftState;
    }));
  }

  toggleViewMode(): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.viewMode = draftState.viewMode === 'list' ? 'radar' : 'list';

      return draftState;
    }));
  }

  private restoreState(): void {
    if (!canUseSessionStorage()) {
      return;
    }

    this.setState(state => produce(state, (draftState: ApplicationState) => {
      return Object.assign(draftState, restoreState(SESSION_STORAGE_KEY) || {});
    }));
  }
}
