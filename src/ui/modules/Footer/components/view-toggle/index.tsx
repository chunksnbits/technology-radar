
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
  radar: {
    icon: 'radar',
    label: 'Toggle radar view'
  },
  list: {
    icon: 'list',
    label: 'Toggle list view'
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
