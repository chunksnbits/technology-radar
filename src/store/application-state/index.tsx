
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createContext, Component, Context } from 'react';
import produce from 'immer';

import { canUseSessionStorage } from 'core/utils/dom';
import { restoreState } from 'core/utils/store';
import { mergeAll } from 'core/utils/collection';

import { defaultState } from './constants';

// ----------------------------------------------------------------------------- Configuration
export interface ApplicationStateProps {
  state?: ApplicationState;
  screen?: {
    width: number,
    height: number,
  }
}

const SESSION_STORAGE_KEY = 'cnb--application-state';

export const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions> = createContext({} as any);

export class ApplicationStateProvider
  extends Component<ApplicationStateProps, ApplicationState & ApplicationStateActions>
  implements ApplicationStateActions
{
  constructor(props: ApplicationStateProps) {
    super(props);

    this.state = {
      ...mergeAll(defaultState, props.state || {}, this.restoreState()),

      reset: this.reset.bind(this),
      focusTechnology: this.focusTechnology.bind(this),
      selectTechnology: this.selectTechnology.bind(this),
      selectGroup: this.selectGroup.bind(this),
      toggleViewMode: this.toggleViewMode.bind(this),
    }
  }

  render() {
    return (
      <ApplicationStateContext.Provider value={ { ...this.props.state, ...this.state } }>
        { this.props.children }
      </ApplicationStateContext.Provider>
    );
  }

  // ----------------------------------------------------------------------------- Action methods
  reset(): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = null;
      draftState.selectedGroup = null;

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

  toggleViewMode(): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.viewMode = draftState.viewMode === 'list' ? 'radar' : 'list';

      return draftState;
    }));
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private restoreState(): ApplicationState | {} {
    if (!canUseSessionStorage()) {
      return {};
    }

    return restoreState(SESSION_STORAGE_KEY) || {};
  }
}
