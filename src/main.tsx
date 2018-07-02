

import { bootstrap } from 'core/utils/bootstrap';
import { TechnologyRadar } from 'core/apps';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.querySelector('technology-radar') as HTMLElement;

bootstrap(TechnologyRadar, rootElement);
registerServiceWorker();
