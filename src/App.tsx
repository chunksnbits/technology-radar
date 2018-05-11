import * as React from 'react';
import './App.css';

import { TechnologyRadar } from 'components/Technology-Radar';

import imported from 'public/data.json';

const data: Data = imported as Data;

// import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className='c-app'>
        <header className='c-app__header'>
          <h1 className='c-app__title'>Welcome to React</h1>
        </header>

        <TechnologyRadar technologies={ data.technologies } groups={ data.groups }  />
      </div>
    );
  }
}

export default App;
