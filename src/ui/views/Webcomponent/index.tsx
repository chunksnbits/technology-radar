
// ----------------------------------------------------------------------------- Dependencies
import * as React from 'react';
import { PureComponent } from 'react';

import { webcomponent } from 'utils';
import { JssBridge } from '../../components';

import { styles } from './styles.jss';
import { TechnologyRadar, TechnologyRadarProps } from '../TechnologyRadar';

// ----------------------------------------------------------------------------- Implementation
@webcomponent<TechnologyRadarProps>()
export class Webcomponent extends PureComponent<TechnologyRadarProps> {
  render() {
    return (
      <JssBridge attach={ [styles as any] }>{
        this.props.data && (
          <TechnologyRadar { ...this.props } />
        )
      }</JssBridge>
    );
  }
}
