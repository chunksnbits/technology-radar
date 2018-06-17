
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';
import { classNames } from 'utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface ViewToggleProps {
  className?: string;
  viewMode: ViewMode;
  onClick: () => void;
}

const viewToggleOptions = {
  list: {
    icon: 'radar',
    label: 'Show radar view'
  },
  radar: {
    icon: 'list',
    label: 'Show list view'
  }
}

// ----------------------------------------------------------------------------- Implementation
export const ViewToggle = ({ viewMode, className, onClick }: ViewToggleProps) => (
  <Button className={ classNames('c-view-toggle', className) } onClick={ onClick }>
    <Icon name={ viewToggleOptions[viewMode].icon } />
    <span>{
      viewToggleOptions[viewMode].label
    }</span>
  </Button>
);
