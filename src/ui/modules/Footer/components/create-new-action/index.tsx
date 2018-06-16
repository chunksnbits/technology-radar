
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { Button } from '@material-ui/core';
import { Icon } from 'ui/components/Icon';
import { classNames } from 'utils/dom';

// ----------------------------------------------------------------------------- Configuration
export interface CreateNewActionProps {
  className?: string;
  owner: boolean;
  onClick: () => void;
}

// ----------------------------------------------------------------------------- Implementation
export const CreateNewAction = ({ className, owner, onClick }: CreateNewActionProps) => {
  return owner && (
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
