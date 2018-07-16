
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ComponentClass, StatelessComponent, Component, RefObject, createRef } from 'react';
import { shadowRoot } from '../dom';

// ----------------------------------------------------------------------------- Implementation
export function webcomponent<T>(): (component: ComponentClass<T> | StatelessComponent<T>) => any {
  return (WrappedComponent: ComponentClass<T> | StatelessComponent<T>) => {
    return class extends Component<T, T> {
      private elementRef: RefObject<HTMLDivElement>;

      constructor(props: T) {
        super(props);

        this.elementRef = createRef()

        this.state = Object.assign({}, props);
      }

      componentDidMount() {
        const root = shadowRoot(this.elementRef.current);

        this.setState(() => {
          const attributes = Array.prototype.slice.call(root.attributes);
          return this.parseAttributes(attributes);
        })
      }

      webComponentAttributeChanged(name: string, _, value: any) {
        this.setState((state) => {
          return Object.assign({}, state, { [name]: value });
        });
      }

      render() {
        const AnyComponent = WrappedComponent as any;

        return (
          <div ref={ this.elementRef } className='g-webcomponent-root'>
            <AnyComponent { ...this.state } />
          </div>
        );
      }

      private parseAttributes(attributes: Attr[]): T {
        return attributes.reduce((result, attribute) => {
          let value = attribute.value;

          try {
            value = JSON.parse(value);
          } catch (error) {
            /** expected */
          }

          return Object.assign({}, result, { [attribute.name]: value });
        }, {} as T);
      }
    };
  };
}