
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  selectedTechnology: Technology;
  groups: Group[];
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyDetails extends Component<TechnologyDetailsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, groups } = this.props;

    if (!Boolean(selectedTechnology)) {
      return null;
    }

    const group = this.findGroupForTechnology(selectedTechnology, groups);

    return (
      <div className='c-technology-details'>
        <div className='c-technology-details__header'>
          <h3 className='c-technology-details__name'>
            { this.props.selectedTechnology.name }
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
          { this.props.selectedTechnology.description }
        </p>
      </div>
    );;
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    return groups.find(group => group.id === technology.groupId);
  }
}
