
import { bootstrap } from 'core/utils/bootstrap';
import { TechnologyRadar } from 'core/apps';
import registerServiceWorker from './registerServiceWorker';

bootstrap(TechnologyRadar, document.querySelector('technology-radar'));
registerServiceWorker();
