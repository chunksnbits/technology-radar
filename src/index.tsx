
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'ui/views/App';
import { ApplicationState } from 'store';

import registerServiceWorker from './registerServiceWorker';
import initialState from 'public/data.json';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
const applicationState = new ApplicationState(initialState);
const rootNode = document.getElementById('root') as HTMLElement;

// ----------------------------------------------------------------------------- Implementation
ReactDOM.render(<App applicationState={ applicationState }/>, rootNode);

registerServiceWorker();
