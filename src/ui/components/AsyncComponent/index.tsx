
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface AsyncComponentState {
  promise?: Promise<any> | null;
  component?: Component;
}
export interface AsyncComponentProps {
  className?: string;
  onLoad: () => Promise<any>;

  // Must be provided in case onLoad does not resolve into a single component.
  componentName?: string;
}

// ----------------------------------------------------------------------------- Implementation
export class AsyncComponent extends Component<AsyncComponentProps, AsyncComponentState> {

  constructor(props: AsyncComponentProps) {
    super(props);

    const promise = props.onLoad().then(this.initialize.bind(this));

    this.state = {
      promise
    };
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    if (Boolean(this.state.promise)) {
      const modifiers = [
        'c-async-settings-panel--pending'
      ];

      return (
        <div className={ classNames('c-async-settings-panel', this.props.className, ...modifiers)}>
          { this.props.children }
        </div>
      );
    }

    const AsynComponent: any = this.state.component;

    return <AsynComponent { ...this.props } />;
  }

  private initialize(component) {
    this.setState(() => ({
      promise: null,
      component: this.props.componentName ? component[this.props.componentName] : component
    }));
  }
}
