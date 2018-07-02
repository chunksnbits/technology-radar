
// ----------------------------------------------------------------------------- Dependencies
import { App } from 'core/ui/views/App';
import registerServiceWorker from './registerServiceWorker';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
import { bootstrap } from './bootstrap';

const rootElement = document.getElementById('root');

import applicationConfig from 'public/data.json';

// ----------------------------------------------------------------------------- Implementation
bootstrap(App, rootElement, applicationConfig);
registerServiceWorker();
