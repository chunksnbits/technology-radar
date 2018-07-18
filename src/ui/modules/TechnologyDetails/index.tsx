
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';
import * as React from 'react';

import { Classes } from 'jss';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { styled, consume, classNames } from 'utils';

import { GlobalBackground, TextButton, Logo } from '../../components';
import { TechnologyDetailsNavigation } from './components/TechnologyDetailsNavigation';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyDetailsProps {
  className?: string;
  classes?: Classes;
  groups?: Group[];
  technologies?: Technology[];
  selectedTechnology?: Technology;

  selectTechnology?: (technology: Technology) => void;
  selectGroup?: (group: Group) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, { select: ['selectedTechnology', 'selectTechnology', 'selectGroup'] })
@consume(TechnologyRadarContext, { select: ['groups', 'technologies'] })
@styled(styles)
export class TechnologyDetails extends PureComponent<TechnologyDetailsProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, groups, technologies, classes } = this.props;

    const active = Boolean(selectedTechnology);

    const modifiers = [
      active && classes.technologyDetailsActive,
    ];

    const group = this.findGroupForTechnology(selectedTechnology, groups);

    return (
      <div className={ classNames(classes.root, this.props.className, ...modifiers) }>
        {
          active && Boolean(selectedTechnology.logo) &&
          <GlobalBackground>
            <Logo className={ classes.technologyDetailsLogo }
              name={ selectedTechnology.logo }
              color={ group && group.color } />
          </GlobalBackground>
        }
        <div className={ classes.technologyDetailsContent }>
          <div className={ classes.technologyDetailsTitle }>
            <h3 className={ classes.technologyDetailsName }>
              { selectedTechnology && selectedTechnology.name }
            </h3>

            <TextButton onClick={ this.selectGroupHandler } className={ classes.technologyDetailsGroup }>
              <span className={ classes.technologyDetailsGroupColor }
                style={{
                  borderColor: Boolean(group) ? group.color : 'transparent',
                }} />

              <span className={ classes.technologyDetailsGroupName }>
                { Boolean(group) ? group.name : null }
              </span>
            </TextButton>
          </div>

          <p className={ classes.technologyDetailsDescription }>
            { selectedTechnology && selectedTechnology.description }
          </p>
        </div>

        <TechnologyDetailsNavigation
          className={ classes.technologyDetailsNavigation }
          selectedTechnology={ selectedTechnology }
          technologies={ technologies }
          onSelect={ this.selectTechnologyHandler } />
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  selectGroupHandler = () => {
    const { groups, selectedTechnology, selectGroup, selectTechnology } = this.props;

    const group = this.findGroupForTechnology(selectedTechnology, groups);

    selectGroup(group)
    selectTechnology(null);
  }

  selectTechnologyHandler = (technology: Technology) => {
    const { selectTechnology } = this.props;

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
