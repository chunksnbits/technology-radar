
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { TechnologyRadar } from 'components/Technology-Radar';

import imported from 'public/data.json';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
const data: Data = imported as Data;

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

        <TechnologyRadar technologies={ data.technologies } groups={ data.groups }  />
      </div>
    );
  }
}
