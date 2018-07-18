
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { Button } from '@material-ui/core';
import { Classes } from 'jss';

import { classNames, styled } from 'utils';
import { Icon } from '../../../../components';

import { styles } from '../../styles.jss';

// ----------------------------------------------------------------------------- Configuration
export interface ViewToggleProps {
  className?: string;
  classes?: Classes;
  viewMode: ViewMode;
  onClick: () => void;
}

const viewToggleOptions = {
  list: {
    icon: 'radar',
    label: 'Show radar view',
  },
  radar: {
    icon: 'list',
    label: 'Show list view',
  },
}

// ----------------------------------------------------------------------------- Implementation
@styled(styles)
export class ViewToggle extends PureComponent<ViewToggleProps> {
  render() {
    const { viewMode, className, onClick, classes } = this.props;

    return (
      <Button className={ classNames(classes.footerAction, classes.viewToggle, className) } onClick={ onClick }>
        <Icon className={ classes.footerActionIcon } name={ viewToggleOptions[viewMode].icon } />
        <span>{
          viewToggleOptions[viewMode].label
        }</span>
      </Button>
    );
  }
}
