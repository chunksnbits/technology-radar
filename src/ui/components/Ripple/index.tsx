
// ----------------------------------------------------------------------------- Dependencies
import { createRef, Component, RefObject, MouseEvent, TouchEvent } from 'react';
import * as React from 'react';

import { classNames, getPrimaryTouch, getPositionInElement } from 'utils/dom';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface RippleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
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
        onMouseDown={ this.applyRippleHandler }
        onTouchStart={ this.applyRippleHandler }
        { ...this.props as any }>
        <div className='c-ripple__ripple' ref={this.elementRef}>
          <div className='c-ripple__element' />
        </div>

        { this.props.children }
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler functions
  private applyRippleHandler = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const parent = this.elementRef.current.parentElement;

    parent.classList.remove('c-ripple--active');
    parent.classList.remove('c-ripple--will-change');

    requestAnimationFrame(() => this.applyRipple(event));
  }

  private applyRipple(event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) {
    const parentElement = this.elementRef.current.parentElement;

    if (this.props.position !== 'relative') {
      const touch = getPrimaryTouch(event);
      const position = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      };
      const { x, y } = getPositionInElement(this.elementRef.current.parentElement, position);

      this.elementRef.current.style.transform = `translate(${ x }px, ${ y }px)`;
    }

    this.registerReset(parentElement);
  }

  private registerReset(parentElement: HTMLElement): void {
    const resetTransitionHandler = () => {
      parentElement.classList.remove('c-ripple--active');
      parentElement.addEventListener('transitionend', resetTransitionHandler);
    };

    parentElement.addEventListener('transitionend', resetTransitionHandler);
    // In case the touchend gets stuck
    setTimeout(resetTransitionHandler, ANIMATION_DURATION_LIFELINE_TIMEOUT);

    parentElement.classList.add('c-ripple--will-change');
    requestAnimationFrame(() => parentElement.classList.add('c-ripple--active'));
  }
}
