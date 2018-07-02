// ----------------------------------------------------------------------------- Dependencies
import { App } from 'core/ui/views/App';
import registerServiceWorker from './registerServiceWorker';
import './styles.scss';
// ----------------------------------------------------------------------------- Configuration
import { bootstrap } from './bootstrap';
var rootElement = document.getElementById('root');
import applicationConfig from 'public/data.json';
// ----------------------------------------------------------------------------- Implementation
bootstrap(App, rootElement, applicationConfig);
registerServiceWorker();
//# sourceMappingURL=index.js.map