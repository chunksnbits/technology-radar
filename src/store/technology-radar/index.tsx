
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent, createContext, Context } from 'react';

import { consume } from 'core/utils/store';

import { ApplicationStateContext } from '../application-state';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyRadarProviderProps {
  state?: any;
}

export const TechnologyRadarContext: Context<TechnologyRadarProviderComponent> = createContext({} as any);

// ----------------------------------------------------------------------------- Implementation
export class TechnologyRadarProviderComponent extends PureComponent<TechnologyRadarProviderProps, TechnologyRadarStore> {

  render() {
    const { technologies, groups } = this.props.state;

    const state = {
      ...this.props.state,
      technologies: this.sortTechnologies(technologies, groups),
    };

    return (
      <TechnologyRadarContext.Provider value={ Object.assign({}, state, this) }>
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

// ----------------------------------------------------------------------------- Export
// tslint:disable-next-line:max-classes-per-file
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
export class TechnologyRadarProvider extends TechnologyRadarProviderComponent {}

