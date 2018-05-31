
// ----------------------------------------------------------------------------- Dependencies
import { createRef, Component, RefObject, MouseEvent, TouchEvent } from 'react';
import * as React from 'react';

import { classNames, getPrimaryTouch, getPositionInElement } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface RippleProps {
  className?: string;
  position?: 'relative' | 'exact' | undefined;  // defaults to 'exact'
}

const ANIMATION_DURATION_LIFELINE_TIMEOUT = 2000;

// ----------------------------------------------------------------------------- Implementation
export class Ripple extends Component<RippleProps> {

  private elementRef: RefObject<HTMLDivElement>;

  constructor(props: RippleProps) {
    super(props);

    this.elementRef = createRef();
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {

    const modifiers = [
      `c-ripple--${ this.props.position || 'exact' }`
    ];

    return (
      <div className={ classNames('c-ripple', this.props.className, ...modifiers) }
        onMouseDown={ this.handleApplyRipple }
        onTouchStart={ this.handleApplyRipple }>
        <div className='c-ripple__ripple' ref={this.elementRef} />

        { this.props.children }
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler functions
  private bindResetTransition(parent: HTMLElement): () => void {
    return () => {
      parent.classList.remove('c-ripple--active');
    };
  }

  private handleApplyRipple = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const parent = this.elementRef.current.parentElement;

    if (this.props.position !== 'relative') {
      const touch = getPrimaryTouch(event);
      const position = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      };
      const { x, y } = getPositionInElement(this.elementRef.current.parentElement, position);

      this.elementRef.current.style.transform = `translate(${ x }px, ${ y }px)`;
    }

    parent.addEventListener('transitionend', this.bindResetTransition(parent));
    // In case the touchend gets stuck
    setTimeout(this.bindResetTransition(parent), ANIMATION_DURATION_LIFELINE_TIMEOUT);

    requestAnimationFrame(() => parent.classList.add('c-ripple--active'));
  }
}
