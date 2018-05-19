
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import { observer } from 'mobx-react';

// ----------------------------------------------------------------------------- Configuration
export interface IteratorProps {
  className?: string;
  collection: any[];
}

// ----------------------------------------------------------------------------- Implementation
@observer
export class Iterator extends Component<IteratorProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const renderFnc = this.props.children as any;
    return this.props.collection.map((element) => renderFnc(element));
  }
}
