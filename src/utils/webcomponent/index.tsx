
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ComponentClass, StatelessComponent, Component, RefObject, createRef } from 'react';
import { shadowRoot } from 'utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface AttributesMap {
  [key: string]: string | number | object;
}

// ----------------------------------------------------------------------------- Implementation
export function webcomponent<T>(): (component: ComponentClass<T> | StatelessComponent<T>) => any {
  return (WrappedComponent: ComponentClass<T> | StatelessComponent<T>) => {
    return class extends Component<void, any> {
      private elementRef: RefObject<HTMLDivElement>;

      constructor(props: any) {
        super(props);

        this.elementRef = createRef()
        this.state = {};
      }

      componentDidMount() {
        const root = shadowRoot(this.elementRef.current);

        this.setState(() => {
          const attributes = Array.prototype.slice.call(root.attributes);
          return this.parseAttributes(attributes);
        })
      }

      webComponentAttributeChanged(name: string, _, value: any) {
        this.setState(() => ({ [name]: value }));
      }

      render() {
        const AnyComponent = WrappedComponent as any;

        return (
          <div ref={ this.elementRef }>
            <AnyComponent { ...this.state } />
          </div>
        );
      }

      private parseAttributes(attributes: Attr[]): AttributesMap {
        return attributes.reduce((result, attribute) => {
          let value = attribute.value;

          try {
            value = JSON.parse(value);
          } catch (error) {
            /** expected */
          }

          return {
            ...result,
            [attribute.name]: value,
          };
        }, {});
      }
    };
  };
}