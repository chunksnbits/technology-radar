
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume } from 'utils/store';
import { classNames } from 'utils/dom';

import { GlobalBackground } from 'ui/components/GlobalBackground';
import { TextButton } from 'ui/components/TextButton';
import { TechnologyDetailsNavigation } from './components/TechnologyDetailsNavigation';

import './styles.scss';
import { Logo } from 'ui/components/Logo';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { bindTo: 'applicationState' })
@consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
export class TechnologyDetails extends Component<TechnologyDetailsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology } = this.props.applicationState;
    const { groups, technologies } = this.props.technologyRadar;

    const active = Boolean(selectedTechnology);

    const modifiers = [
      active && 'c-technology-details--active'
    ];

    const group = this.findGroupForTechnology(selectedTechnology, groups);

    return (
      <div className={ classNames('c-technology-details', this.props.className, ...modifiers) }>
        {
          active && Boolean(selectedTechnology.logo) &&
          <GlobalBackground>
            <Logo className='c-technology-details__logo'
              name={ selectedTechnology.logo }
              color={ group && group.color } />
          </GlobalBackground>
        }
        <div className='c-technology-details__header'>
          <h3 className='c-technology-details__name'>
            { selectedTechnology && selectedTechnology.name }
          </h3>

          <TextButton onClick={ this.selectGroupHandler } className='c-technology-details__group'>
            <span className='c-technology-details__group-color'
              style={{
                borderColor: Boolean(group) ? group.color : 'transparent'
              }} />

            <span className='c-technology-details__group-name'>
              { Boolean(group) ? group.name : null }
            </span>
          </TextButton>
        </div>

        <p className='c-technology-details__description'>
          { selectedTechnology && selectedTechnology.description }
        </p>

        <TechnologyDetailsNavigation
          selectedTechnology={ selectedTechnology }
          technologies={ technologies }
          onSelect={ this.selectTechnologyHandler } />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  selectGroupHandler = () => {
    const { selectedTechnology, selectGroup, selectTechnology } = this.props.applicationState;
    const { groups } = this.props.technologyRadar;

    const group = this.findGroupForTechnology(selectedTechnology, groups);

    selectGroup(group)
    selectTechnology(null);
  }

  selectTechnologyHandler = (technology: Technology) => {
    const { selectTechnology } = this.props.applicationState;

    selectTechnology(technology);
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private findGroupForTechnology(technology: Technology, groups: Group[]): Group {
    if (!technology) {
      return null;
    }

    return groups.find(group => group.id === technology.groupId);
  }
}
