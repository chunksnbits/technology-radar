// tslint:disable:max-classes-per-file

// ----------------------------------------------------------------------------- Dependencies
import { PureComponent, Props } from 'react';
import * as React from 'react';
import { Classes } from 'jss';

import { styled, classNames } from 'core/utils';

import { Icon } from '../Icon';
import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface ExpansionPanelProps {
  className?: string;
  classes?: Classes;
  active: boolean;
  onToggle: Function;
}

export class ExpansionPanelHeader extends PureComponent<Props<void>> {
  render() { return this.props.children; }
}
export class ExpansionPanelBody extends PureComponent<Props<void>> {
  render() { return this.props.children; }
}
export class ExpansionPanelFooter extends PureComponent<Props<void>> {
  render() { return this.props.children; }
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class ExpansionPanel extends PureComponent<ExpansionPanelProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { children, className, classes } = this.props

    const modifiers = [
      this.props.active && classes.expansionPanelActive,
    ];

    const allChildren = React.Children.toArray(children);

    const header = allChildren.filter((child: any) => child.type === ExpansionPanelHeader);
    const body = allChildren.filter((child: any) => child.type === ExpansionPanelBody);
    const footer = allChildren.filter((child: any) => child.type === ExpansionPanelFooter);

    return (
      <div className={ classNames(classes.expansionPanel, className, ...modifiers) }>
        {
          header.length > 0 && (
            <button className={ classes.expansionPanelHeader } onClick={ this.propagateToggle }>
              <div className={ classes.expansionPanelHeaderTitle }>
                { header }
              </div>
              <Icon name='arrow-down' className={ classes.expansionPanelIcon } />
            </button>
          )
        }{
          body.length > 0 && (
            <div className={ classes.expansionPanelBody }>{ body }</div>
          )
        }{
          footer.length > 0 && (
            <div className={ classes.expansionPanelFooter }>{ footer }</div>
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
