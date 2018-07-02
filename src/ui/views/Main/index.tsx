
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEvent, PureComponent } from 'react';

import { ApplicationStateContext } from 'core/store';

import { TechnologyGraph, TechnologyList, TechnologyDetails, Header, Footer } from 'core/ui/modules';
import { BottomSheet } from 'core/ui/components/BottomSheet';
import { consume, debounce, classNames, canUseDOM } from 'core/utils';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface MainViewProps {
  className?: string;
  editor?: boolean;
  selectedTechnology?: Technology;
  viewMode?: ViewMode;
  updateBreakpoint?: (width: number, height: number) => void;
  selectTechnology?: (technology: Technology) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, {
  select: ['selectTechnology', 'selectedTechnology', 'viewMode', 'updateBreakpoint']
})
export class MainView extends PureComponent<MainViewProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  componentDidMount() {
    if (!canUseDOM()) {
      return;
    }

    const { updateBreakpoint } = this.props;

    window.addEventListener('resize', this.windowResizeHandler);
    updateBreakpoint(window.innerWidth, window.innerHeight);
  }

  componentWillUnmount() {
    if (!canUseDOM()) {
      return;
    }

    window.removeEventListener('resize', this.windowResizeHandler);
  }

  render() {
    const { selectedTechnology, viewMode  } = this.props;

    const modifiers = [
      selectedTechnology && 'c-technology-radar--selected-technology',
      `c-technology-radar--view-${ viewMode }`
    ];


    return (
      <main className={ classNames('c-technology-radar', ...modifiers) }>
        <Header />

        <section className='c-technology-radar__content-wrapper c-technology-radar__content-wrapper--radar'>
          <div className='c-technology-radar__technology-radar'>
            <TechnologyGraph className='c-technology-radar__content c-technology-radar__technology-radar-content' />
          </div>
        </section>

        <section className='c-technology-radar__content-wrapper c-technology-radar__content-wrapper--list'>
          <TechnologyList className='c-technology-radar__content c-technology-radar__technology-list-content' />
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
  private windowResizeHandler = () => {
    debounce('app', () => {
      this.props.updateBreakpoint(window.innerWidth, window.innerHeight);
    });
  }

  private technologyDetailsClosedHandler = (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.selectTechnology(null);
  }
}
