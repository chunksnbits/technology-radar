
// ----------------------------------------------------------------------------- Dependencies
import { PureComponent } from 'react';

// ----------------------------------------------------------------------------- Configuration
export interface IteratorProps {
  className?: string;
  collection: any[];
}

// ----------------------------------------------------------------------------- Implementation
export class Iterator extends PureComponent<IteratorProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const renderFnc = this.props.children as any;
    return this.props.collection.map((element) => renderFnc(element));
  }
}
