
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Context, Component } from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface BoundComponentOptions {
  bindToProp: string;
}

// ----------------------------------------------------------------------------- Implementation
export function consume<T extends Component>(Provider: Context<any>, options: BoundComponentOptions): any {
  const key = options.bindToProp || 'value';

  return (WrappedComponent: T): any => {
    return class extends Component<any> {
      render() {
        const InnerComponent = WrappedComponent as any;
        return (
          <Provider.Consumer>{ value =>
            <InnerComponent {...Object.assign({}, this.props, { [key]: value })} />
          }</Provider.Consumer>
        )
      }
    };
  };
}
