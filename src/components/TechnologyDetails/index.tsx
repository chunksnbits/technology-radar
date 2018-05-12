
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  selectedTechnology: Technology;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyDetails extends Component<TechnologyDetailsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (!Boolean(this.props.selectedTechnology)) {
      return null;
    }

    return (
      <div className='c-technology-details'>
        <h3 className='c-technology-details__name'>
          { this.props.selectedTechnology.name }
        </h3>

        <p className='c-technology-details__description'>
          { this.props.selectedTechnology.description }
        </p>
      </div>
    );;
  }
}
