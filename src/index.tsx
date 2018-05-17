
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { App } from 'ui/views/App';
import { ApplicationStateImpl } from 'store';

import registerServiceWorker from './registerServiceWorker';
import technologyRadar from 'public/data.json';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
const applicationState = new ApplicationStateImpl({ technologyRadar });
const rootNode = document.getElementById('root') as HTMLElement;

configure({ enforceActions: true });

// ----------------------------------------------------------------------------- Implementation
ReactDOM.render(<App applicationState={ applicationState }/>, rootNode);

registerServiceWorker();
