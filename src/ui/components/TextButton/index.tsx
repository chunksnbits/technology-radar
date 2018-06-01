
// ----------------------------------------------------------------------------- Dependencies
import { Component } from 'react';
import * as React from 'react';

import { classNames } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TextButtonProps {
  className?: string;
  onClick: Function;
}

// ----------------------------------------------------------------------------- Implementation
export class TextButton extends Component<TextButtonProps> {

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const modifiers = [];

    return (
      <button className={ classNames('c-text-button', this.props.className, ...modifiers) }
        onClick={ this.props.onClick as any }>
        { this.props.children }
      </button>
    );
  }
}
