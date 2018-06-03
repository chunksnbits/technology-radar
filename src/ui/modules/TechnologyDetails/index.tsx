
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume, compose } from 'utils/store';
import { classNames } from 'utils/dom';
import { GlobalBackground } from 'ui/components/GlobalBackground';

import './styles.scss';
import { TextButton } from 'ui/components/TextButton';
import { TechnologyDetailsNavigation } from './components/TechnologyDetailsNavigation';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
export class TechnologyDetailsComponent extends PureComponent<TechnologyDetailsProps> {
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
            <svg className={ 'c-technology-details__logo' }
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMin'
              viewBox='0 0 24 24'
              fill={ group && group.color }>
              <use xlinkHref={ `/logo.symbols.svg#${ selectedTechnology.logo }` } />
            </svg>
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

export const TechnologyDetails = compose(
  consume(ApplicationStateContext, { bindTo: 'applicationState' }),
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' })
)(TechnologyDetailsComponent);
