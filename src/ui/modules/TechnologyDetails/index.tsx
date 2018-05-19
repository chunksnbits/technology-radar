
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';

import { ApplicationState } from 'store/application-state';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class TechnologyDetails extends Component<TechnologyDetailsProps> {
  // ----------------------------------------------------------------------------- Lifecycle methods

  shouldComponentUpdate(props: TechnologyDetailsProps) {
    return true;
  }

  render() {
    return (
      <ApplicationState.Consumer>{ ({ selectedTechnology, technologyRadar }) => {
        const modifiers = [
          selectedTechnology && 'c-technology-details--active'
        ];

        const group = this.findGroupForTechnology(selectedTechnology, technologyRadar.groups);

        return (
          <div className={ classNames('c-technology-details', this.props.className, ...modifiers) }>
            <div className='c-technology-details__header'>
              <h3 className='c-technology-details__name'>
                { selectedTechnology && selectedTechnology.name }
              </h3>

              <div className='c-technology-details__group'>
                <span className='c-technology-details__group-color'
                  style={{
                    borderColor: group ? group.color : 'transparent'
                  }} />

                <span className='c-technology-details__group-name'>
                  { group ? group.name : null }
                </span>
              </div>
            </div>

            <p className='c-technology-details__description'>
              { selectedTechnology && selectedTechnology.description }
            </p>
          </div>
        );
      }}</ApplicationState.Consumer>
    );;
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    if (!technology) {
      return null;
    }

    return groups.find(group => group.id === technology.groupId);
  }
}
