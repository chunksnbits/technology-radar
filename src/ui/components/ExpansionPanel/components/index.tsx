
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface ExpansionPanelBaseComponentProps {
  className?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class ExpansionPanelBaseComponent extends Component<ExpansionPanelBaseComponentProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div className={ this.props.className }>
        { this.props.children }
      </div>
    );
  }
}
