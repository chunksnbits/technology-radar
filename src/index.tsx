
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { App } from 'ui/views/App';
import registerServiceWorker from './registerServiceWorker';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
const rootNode = document.getElementById('root') as HTMLElement;

configure({ enforceActions: true });

// ----------------------------------------------------------------------------- Implementation
ReactDOM.render(<App />, rootNode);

registerServiceWorker();
