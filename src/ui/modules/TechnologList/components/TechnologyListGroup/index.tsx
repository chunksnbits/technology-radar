
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { ReactNode } from 'react';

import './styles.scss';

// ----------------------------------------------------------------------------- Configuration
export interface TechnologyListGroupProps {
  className?: string;
  children: ReactNode;
}

// ----------------------------------------------------------------------------- Implementation
export const TechnologyListGroup = (props: TechnologyListGroupProps) => (
  <li className='c-technology-list-group'>
    <ul className='c-technology-list-group__items'>{
      props.children
    }</ul>
  </li>
);
