
// ----------------------------------------------------------------------------- Dependencies
import { createRef, PureComponent, RefObject, MouseEvent, TouchEvent } from 'react';
import * as React from 'react';
import { Classes } from 'jss';

import { styled, classNames, getPrimaryTouch, getPositionInElement } from 'utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface RippleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
  classes?: Classes;
  position?: 'relative' | 'exact' | undefined;  // defaults to 'exact'
}

const ANIMATION_DURATION_LIFELINE_TIMEOUT = 2000;

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class Ripple extends PureComponent<RippleProps> {

  private elementRef: RefObject<HTMLDivElement>;

  constructor(props: RippleProps) {
    super(props);

    this.elementRef = createRef();
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    const { className, children, classes } = this.props;

    return (
      <div className={ classNames(classes.root, className) }
        onMouseDown={ this.applyRippleHandler }
        onTouchStart={ this.applyRippleHandler }
        { ...this.props as any }>
        <div className={ classes.ripple } ref={this.elementRef}>
          <div className={ classes.rippleElement} />
        </div>

        { children }
      </div>
    );
  }

  // ----------------------------------------------------------------------------- Event handler functions
  private applyRippleHandler = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    const parent = this.elementRef.current.parentElement;

    parent.classList.remove(this.props.classes.rippleActive);
    parent.classList.remove(this.props.classes.rippleWillChange);

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
      parentElement.classList.remove(this.props.classes.rippleActive);
      parentElement.addEventListener('transitionend', resetTransitionHandler);
    };

    parentElement.addEventListener('transitionend', resetTransitionHandler);
    // In case the touchend gets stuck
    setTimeout(resetTransitionHandler, ANIMATION_DURATION_LIFELINE_TIMEOUT);

    parentElement.classList.add(this.props.classes.rippleWillChange);
    requestAnimationFrame(() => parentElement.classList.add(this.props.classes.rippleActive));
  }
}
