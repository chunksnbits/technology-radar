
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';
import { ApplicationState } from 'store/application-state';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class Header extends Component<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <ApplicationState.Consumer>{ applicationState =>
        <header className={ classNames('c-header', this.props.className) }>
          <img className='c-header__logo' src={ applicationState.logo } />

          <h1 className='c-header__title'>
            { applicationState.title }
          </h1>
        </header>
      }</ApplicationState.Consumer>
    );
  }
}
