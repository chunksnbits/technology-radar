
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { MouseEvent } from 'react';

import { ApplicationStateContext } from 'store';

import { TechnologyRadar } from 'ui/modules/TechnologyRadar';
import { TechnologyDetails } from 'ui/modules/TechnologyDetails';

import { Header } from 'ui/modules/Header';
import { Footer } from 'ui/modules/Footer';

import { Modal } from 'ui/components/Modal';
import { AsyncComponent } from '../../components/AsyncComponent';

import { consume } from 'utils/store';

import './styles.scss';
import { TechnologyList } from 'ui/modules/TechnologList';
import { classNames } from 'utils/dom';
import { BottomSheet } from 'ui/components/BottomSheet';

// ----------------------------------------------------------------------------- Configuration
export interface AppProps {
  className?: string;
  applicationState?: ApplicationStateStore;
}

// ----------------------------------------------------------------------------- Implementation
export class AppComponent extends React.Component<AppProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { editMode, selectedTechnology } = this.props.applicationState;

    const modifiers = [
      selectedTechnology && 'c-app--selected-technology'
    ];

    return (
      <main className={ classNames('c-app', ...modifiers) }>
        <Header />

        <section className='c-app__content-wrapper c-app__content-wrapper--fixed'>
          <div className='c-app__technology-radar'>
            <TechnologyRadar className='c-app__content' />
          </div>
        </section>

        <section className='c-app__content-wrapper'>
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
            this.props.applicationState.editor &&
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
  private technologyDetailsClosedHandler = (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.applicationState.selectTechnology(null);
  }

  private setEditModeHandler = () => {
    if (event.defaultPrevented) {
      return;
    }

    this.props.applicationState.setEditMode(false);
  }
}

  export const App = consume(ApplicationStateContext, { bindTo: 'applicationState' })(AppComponent);
