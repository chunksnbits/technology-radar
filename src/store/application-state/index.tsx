
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { createContext, Component, Context } from 'react';
import { canUseSessionStorage } from 'utils/dom';
import { restoreState } from 'utils/store';

import { defaultState } from './constants';
import produce from 'immer';

// ----------------------------------------------------------------------------- Configuration
export interface ApplicationStateProps {
  initialState?: ApplicationState;
}

const SESSION_STORAGE_KEY = 'cnb--application-state';

export const ApplicationStateContext: Context<ApplicationState & ApplicationStateActions> = createContext({} as any);

export class ApplicationStateStore extends Component<ApplicationStateProps, ApplicationState & ApplicationStateActions> implements ApplicationStateActions {

  constructor(props: ApplicationStateProps) {
    super(props);

    this.state = {
      ...defaultState,
      ...this.parseInitialState(props.initialState || {}),

      reset: this.reset.bind(this),
      selectTechnology: this.selectTechnology.bind(this),
      selectGroup: this.selectGroup.bind(this),
      setEditMode: this.setEditMode.bind(this),
      setOwner: this.setOwner.bind(this),
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
  reset(): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = null;
      draftState.selectedGroup = null;
      draftState.editMode = false;

      return draftState;
    }));
  }

  selectTechnology(selected: Technology): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedTechnology = selected;

      return draftState;
    }));
  }

  selectGroup(selected: Group): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.selectedGroup = selected;

      return draftState;
    }));
  }

  setOwner(value: boolean): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.owner = value;

      return draftState;
    }));
  }

  setEditMode(value: boolean): void {
    this.setState(state => produce(state, (draftState: ApplicationState) => {
      draftState.editMode = value;

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

  private parseInitialState(state: ApplicationState): ApplicationState {
    return Object.assign(state, {
      logo: typeof state.logo === 'string' ? state.logo.replace('%PUBLIC_URL%', '') : state.logo
    });
  }
}
