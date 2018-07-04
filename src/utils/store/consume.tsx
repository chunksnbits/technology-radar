// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ComponentClass, StatelessComponent, Context } from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface BoundComponentOptions {
  bindTo?: string;
  select?: string[];
}

// ----------------------------------------------------------------------------- Helpers methods
function bindProps(options: BoundComponentOptions): BoundSelectors<any, any> {
  if (Boolean(options.bindTo)) {
    return {
      [options.bindTo]: value => value,
    }
  }

  return options.select.reduce((result, key) => {
    return {
      ...result,
      [key]: value => value[key],
    }
  }, {});
}

function evaluateBindings(bindings: BoundSelectors<any, any>, props: React.Props<any>) {
  return Object.entries(bindings).reduce((result, [key, selectorFnc]) => {
    return {
      ...result,
      [key]: selectorFnc(props),
    };
  }, {});
}

// ----------------------------------------------------------------------------- Implementation
export function consume<Props, State>(context: Context<Props>, options: BoundComponentOptions): any {
  interface InjectedProps {
    [key: string]: any;
  }

  const bindings = bindProps(options);

  return (WrappedComponent:  ComponentClass<Props> | StatelessComponent<Props>) => {
    return class extends React.Component<Props & InjectedProps, State> {
      render() {
        const InnerComponent = WrappedComponent as any;

        return (
          <context.Consumer>{ value =>
            <InnerComponent { ...Object.assign({}, this.props, evaluateBindings(bindings, value)) } />
          }</context.Consumer>
        )
      }
    };
  };
}