
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyRadar } from 'components/TechnologyRadar';
import { TechnologyDetails } from 'components/TechnologyDetails';
import { applicationState } from 'store';

import data from 'public/data.json';

import './styles.scss';

import logo from './logo.svg';

// ----------------------------------------------------------------------------- Implementation
export class App extends React.Component {
  render() {
    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <img className='c-app__logo' src={ logo } />
          <h1 className='c-app__title'>Welcome to React</h1>
        </header>

        <main className='c-app__main'>
          <TechnologyRadar
            technologies={ data.technologies }
            groups={ data.groups }
            applicationState={ applicationState } />

          <TechnologyDetails
            applicationState={ applicationState } />
        </main>
      </div>
    );
  }
}
