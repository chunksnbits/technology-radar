
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';

import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';
import { classNames } from 'utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface EditModeToggleProps {
  className?: string;
  editor: boolean;
  onClick: () => any;
}

// ----------------------------------------------------------------------------- Implementation
export const EditModeToggle = ({ className, editor, onClick}: EditModeToggleProps) => {
  return editor && (
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

