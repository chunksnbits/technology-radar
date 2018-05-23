// tslint:disable:max-classes-per-file

// ----------------------------------------------------------------------------- Dependencies
import { Component, Props } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';
import { Icon } from '../Icon';

export class ExpansionPanelHeader extends Component<Props<void>> {
  render() { return this.props.children; }
}
export class ExpansionPanelBody extends Component<Props<void>> {
  render() { return this.props.children; }
}
export class ExpansionPanelFooter extends Component<Props<void>> {
  render() { return this.props.children; }
}

// ----------------------------------------------------------------------------- Configuration
export interface ExpansionPanelProps {
  className?: string;
  active: boolean;
  onToggle: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class ExpansionPanel extends Component<ExpansionPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const modifiers = [
      this.props.active && 'c-expansion-panel--active'
    ];

    const children = React.Children.toArray(this.props.children);

    const header = children.filter((child: any) => child.type === ExpansionPanelHeader);
    const body = children.filter((child: any) => child.type === ExpansionPanelBody);
    const footer = children.filter((child: any) => child.type === ExpansionPanelFooter);

    return (
      <div className={ classNames('c-expansion-panel', this.props.className, ...modifiers) }>
        {
          header.length > 0 && (
            <button className='c-expansion-panel__header' onClick={ this.propagateToggle }>
              <div className='c-expansion-panel__header-title'>
                { header }
              </div>
              <Icon name='arrow-down' className='c-expansion-panel__icon' />
            </button>
          )
        }{
          body.length > 0 && (
            <div className='c-expansion-panel__body'>{ body }</div>
          )
        }{
          footer.length > 0 && (
            <div className='c-expansion-panel__footer'>{ footer }</div>
          )
        }
      </div>
    );
  }
  // ----------------------------------------------------------------------------- Helpers methods
  private propagateToggle = () => {
    return this.props.onToggle(!this.props.active);
  }

}
