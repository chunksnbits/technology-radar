// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ComponentClass, StatelessComponent, Context } from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface BoundComponentOptions {
  bindTo: string;
}

// ----------------------------------------------------------------------------- Implementation
export function consume<Props, State>(context: Context<Props>, options: BoundComponentOptions = { bindTo: 'applicationState' }): any {
  const key = options.bindTo || 'value';

  interface InjectedProps {
    [key: string]: any;
  }

  return (WrappedComponent:  ComponentClass<Props> | StatelessComponent<Props>) => {
    return class extends React.Component<Props & InjectedProps, State> {
      render() {
        const InnerComponent = WrappedComponent as any;
        return (
          <context.Consumer>{ value =>
            <InnerComponent { ...Object.assign({}, this.props, { [key]: value })} />
          }</context.Consumer>
        )
      }
    };
  };
}