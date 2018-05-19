
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';
import { observer } from 'mobx-react';

import { classNames } from 'utils/dom';
import { ApplicationState, consume } from 'store';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface HeaderProps {
  className?: string;
  applicationState?: ApplicationState;
}

// ----------------------------------------------------------------------------- Implementation
@consume(ApplicationState, { bindTo: 'applicationState' })
@observer
export class Header extends Component<HeaderProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { logo, title } = this.props.applicationState;

    return (
      <header className={ classNames('c-header', this.props.className) }>
        <img className='c-header__logo' src={ logo } />

        <h1 className='c-header__title'>
          { title }
        </h1>
      </header>
    );
  }
}
