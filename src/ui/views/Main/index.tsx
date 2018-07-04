
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEvent, PureComponent } from 'react';

import { ApplicationStateContext } from 'core/store';

import { Classes } from 'jss';

import { TechnologyGraph, TechnologyList, TechnologyDetails, Header, Footer } from 'core/ui/modules';
import { AspectRatio, BottomSheet } from 'core/ui/components';
import { consume, classNames, styled, capitalize } from 'core/utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface MainViewProps {
  className?: string;
  classes?: Classes;
  editor?: boolean;
  selectedTechnology?: Technology;
  viewMode?: ViewMode;
  selectTechnology?: (technology: Technology) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, {
  select: ['selectTechnology', 'selectedTechnology', 'viewMode'],
})
@styled(styles)
export class MainView extends PureComponent<MainViewProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { selectedTechnology, viewMode, classes  } = this.props;

    const modifiers = [
      selectedTechnology && classes.technologyRadarSelectedTechnology,
      classes[`technologyRadarView${ capitalize(viewMode) }`],
    ];

    return (
      <main className={ classNames(classes.root, ...modifiers) }>
        <Header />

        <section className={ classNames(classes.technologyRadarContentWrapper, classes.technologyRadarContentWrapperRadar) }>
          <div className={ classes.technologyRadarTechnologyRadar }>
            <AspectRatio className={ classes.technologyGraphAspectRatio} ratio={ 1 } />
            <TechnologyGraph className={ classNames(classes.technologyRadarContent, classes.technologyRadarTechnologyRadarContent) }/>
          </div>
        </section>

        <section className={ classNames(classes.technologyRadarContentWrapper, classes.technologyRadarContentWrapperList) }>
          <TechnologyList className={ classNames(classes.technologyRadarContent, classes.technologyRadarTechnologyListContent) }/>
        </section>

        <BottomSheet
          active={ Boolean(selectedTechnology) }
          onClose={ this.technologyDetailsClosedHandler }>
          <TechnologyDetails />
        </BottomSheet>
        <Footer />
      </main>
    );
  }

  // ----------------------------------------------------------------------------- Event handler methods
  private technologyDetailsClosedHandler = (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.selectTechnology(null);
  }
}
