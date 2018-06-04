
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

    return (
      <div className='c-app'>
        <Header />

        <main className='c-app__main'>
          <TechnologyRadar />

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

          <Modal
            open={ Boolean(selectedTechnology) }
            onClose={ this.technologyDetailsClosedHandler }>
            <TechnologyDetails />
          </Modal>
        </main>

        <Footer />
      </div>
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
