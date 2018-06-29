
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEvent, PureComponent } from 'react';

import { ApplicationStateContext } from 'store';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyList } from 'ui/modules/TechnologList';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';
import { Header } from 'ui/modules/Header';
import { Footer } from 'ui/modules/Footer';

import { Modal } from 'ui/components/Modal';
import { AsyncComponent } from 'ui/components/AsyncComponent';
import { BottomSheet } from 'ui/components/BottomSheet';

import { debounce } from 'utils/debounce';
import { consume } from 'utils/store';
import { classNames, canUseDOM } from 'utils/dom';

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
@consume(ApplicationStateContext, { select: ['editMode', 'editor', 'selectedTechnology', 'viewMode', 'updateBreakpoint'] })
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
          <div className='c-app__technology-list'>
            <TechnologyList className='c-app__content c-app__technology-list-content' />
          </div>
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
            <AsyncComponent onLoad={ () => import('ui/modules/SettingsPanel') }
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
