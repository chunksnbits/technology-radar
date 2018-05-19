
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Context, ComponentClass, StatelessComponent } from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface BoundComponentOptions {
  bindToProp: string;
}

// ----------------------------------------------------------------------------- Implementation
export function consume<Props, State>(Provider: Context<any>, options: BoundComponentOptions): any {
  const key = options.bindToProp || 'value';

  interface InjectedProps {
    [key: string]: any;
  }

  return (WrappedComponent:  ComponentClass<Props> | StatelessComponent<Props>) => {
    return class extends React.Component<Props & InjectedProps, State> {
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
