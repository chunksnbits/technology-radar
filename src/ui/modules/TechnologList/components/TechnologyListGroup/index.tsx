
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ReactNode, PureComponent } from 'react';

import { Classes } from 'jss';

import { styled } from 'core/utils';

import { styles } from './styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListGroupProps {
  className?: string;
  classes?: Classes;
  children: ReactNode;
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class TechnologyListGroup extends PureComponent<TechnologyListGroupProps> {
  render() {
    const { classes, children } = this.props;
    return (
      <li className={ classes.root }>
        <ul className={ classes.technologyListGroupItem }>
          { children }
        </ul>
      </li>
    );
  }
}
