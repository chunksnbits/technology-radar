
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent, createContext, Context } from 'react';

import { consume } from 'core/utils/store';

import { ApplicationStateContext } from '../application-state';
import { defaultState } from './constants';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProviderProps {
  initialState?: TechnologyRadar;
  applicationState?: ApplicationState & ApplicationStateActions;
}

export const TechnologyRadarContext: Context<TechnologyRadarProvider> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class TechnologyRadarProvider extends PureComponent<TechnologyRadarProviderProps, TechnologyRadarStore> {

  constructor(props: TechnologyRadarProviderProps) {
    super(props);
    const initialState = Object.assign({}, defaultState, props.initialState || {});

    this.state = {
      ...initialState,

      technologies: this.sortTechnologies(initialState.technologies, initialState.groups)
    };
  }

  render() {
    return (
      <TechnologyRadarContext.Provider value={ Object.assign({}, this.state, this) }>
        { this.props.children }
      </TechnologyRadarContext.Provider>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private sortTechnologies(technologies: Technology[], groups: Group[]): Technology[] {
    return technologies.sort((technology, other) => {
      if (technology.groupId !== other.groupId) {
        return this.groupIndex(groups, technology) - this.groupIndex(groups, other);
      }

      if (technology.level !== other.level) {
        return technology.level - other.level;
      }

      return technology.id > other.id ? -1 : 1;
    })
  }

  private groupIndex(groups: Group[], technology: Technology): number {
    return groups.findIndex(acc => acc.id === technology.groupId);
  }
}
