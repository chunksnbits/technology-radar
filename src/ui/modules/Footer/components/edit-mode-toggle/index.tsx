
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
import { classNames } from 'core/utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface EditModeToggleProps {
  className?: string;
  show: boolean;
  onClick: () => any;
}

// ----------------------------------------------------------------------------- Implementation
export const EditModeToggle = ({ className, show, onClick}: EditModeToggleProps) => {
  return show && (
    <Button
      variant='raised'
      className={ classNames('c-edit-mode-toggle', className) }
      onClick={ onClick }
      color='inherit'>
      <Icon name='add' />
      <span>
        { 'Create your own' }
      </span>
    </Button>
  );
};

