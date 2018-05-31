
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { ApplicationStateContext, TechnologyRadarContext } from 'store';

import { consume, compose } from 'utils/store';
import { classNames } from 'utils/dom';

import './styles.scss';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';

// ----------------------------------------------------------------------------- Configuration
export interface FooterProps {
  className?: string;
  applicationState?: ApplicationStateStore;
  technologyRadar?: TechnologyRadarStore;
}

// ----------------------------------------------------------------------------- Implementation
// tslint:disable-next-line:class-name
export class FooterComponent extends Component<FooterProps> {

  handlers: BoundHandlers<any> = {};

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <footer className={ classNames('c-footer', this.props.className) }>
        <div className='c-footer__actions'>{
          this.props.applicationState.owner && (
            <Button
              variant='raised'
              className='c-footer__action c-footer__action--edit'
              onClick={ this.bindEdit() }
              color='inherit'>
              <span className='c-footer__action-label'>
                <Icon name='edit' className='c-footer__action-icon' />
                { 'Edit' }
              </span>
            </Button>
          )
        } {
          this.props.applicationState.editor && (
            <Button
              variant='raised'
              className='c-footer__action c-footer__action--create'
              onClick={ this.bindCreateNew() }
              color='inherit'>
              <span className='c-footer__action-label'>
                <Icon name='add' className='c-footer__action-icon' />
                { 'Create your own' }
              </span>
            </Button>
          )
        }</div>
      </footer>
    );
  }

  // ----------------------------------------------------------------------------- Helpers methods
  private bindCreateNew() {
    if (!this.handlers.createNew) {
      this.handlers.createNew = () => this.props.technologyRadar.createNew();
    }

    return this.handlers.createNew as any;
  }

  private bindEdit() {
    if (!this.handlers.edit) {
      this.handlers.edit = () => this.props.technologyRadar.edit();
    }

    return this.handlers.edit as any;
  }
}

export const Footer = compose(
  consume(ApplicationStateContext, { bindTo: 'applicationState' }),
  consume(TechnologyRadarContext, { bindTo: 'technologyRadar' }),
)(FooterComponent);