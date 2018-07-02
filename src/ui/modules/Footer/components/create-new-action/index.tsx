
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { Icon } from 'core/ui/components/Icon';
import { classNames } from 'core/utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface CreateNewActionProps {
  className?: string;
  show: boolean;
  onClick: () => void;
}

// ----------------------------------------------------------------------------- Implementation
export const CreateNewAction = ({ className, show, onClick }: CreateNewActionProps) => {
  return show && (
    <Button
      variant='raised'
      className={ classNames('c-create-new-action', className) }
      onClick={ onClick }
      color='inherit'>
      <Icon name='edit' />
      <span>
        { 'Edit' }
      </span>
    </Button>
  );
};
