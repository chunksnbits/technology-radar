
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEvent, PureComponent } from 'react';

import { ApplicationStateContext } from 'core/store';

import { TechnologyRadar } from 'core/ui/modules/TechnologyRadar';
import { TechnologyList } from 'core/ui/modules/TechnologList';
import { TechnologyDetails } from 'core/ui/modules/TechnologyDetails';
import { Header } from 'core/ui/modules/Header';
import { Footer } from 'core/ui/modules/Footer';

import { Modal } from 'core/ui/components/Modal';
import { AsyncComponent } from 'core/ui/components/AsyncComponent';
import { BottomSheet } from 'core/ui/components/BottomSheet';

import { debounce } from 'core/utils/debounce';
import { consume } from 'core/utils/store';
import { classNames, canUseDOM } from 'core/utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface AppProps {
  className?: string;
  editMode?: boolean;
  selectedTechnology?: Technology;
  viewMode?: ViewMode;
  editor?: boolean;
  updateBreakpoint?: (width: number, height: number) => void;
  selectTechnology?: (technology: Technology) => void;
  setEditMode?: (value: boolean) => void;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationStateContext, {
  select: ['editMode', 'editor', 'selectTechnology', 'selectedTechnology', 'viewMode', 'updateBreakpoint']
})
export class App extends PureComponent<AppProps> {

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
    const { editMode, selectedTechnology, viewMode  } = this.props;

    const modifiers = [
      selectedTechnology && 'c-app--selected-technology',
      `c-app--view-${ viewMode }`
    ];


    return (
      <main className={ classNames('c-app', ...modifiers) }>
        <Header />

        <section className='c-app__content-wrapper c-app__content-wrapper--radar'>
          <div className='c-app__technology-radar'>
            <TechnologyRadar className='c-app__content c-app__technology-radar-content' />
          </div>
        </section>

        <section className='c-app__content-wrapper c-app__content-wrapper--list'>
          <TechnologyList className='c-app__content c-app__technology-list-content' />
        </section>

        <BottomSheet
          active={ Boolean(selectedTechnology) }
          onClose={ this.technologyDetailsClosedHandler }>
          <TechnologyDetails />
        </BottomSheet>

        <Modal
          open={ editMode }
          type='sidebar'
          onClose={ this.setEditModeHandler }>{
            this.props.editor &&
            <AsyncComponent onLoad={ () => import('core/ui/modules/SettingsPanel') }
              componentName='SettingsPanel'>
              Loading...
            </AsyncComponent>
          }
        </Modal>

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

  private setEditModeHandler = () => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.setEditMode(false);
  }
}
