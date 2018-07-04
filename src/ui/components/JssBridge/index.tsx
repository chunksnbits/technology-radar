
// ----------------------------------------------------------------------------- Dependencies
import { Fragment, PureComponent, RefObject, createRef } from 'react';
import * as React from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import jssPluginGlobal from 'jss-global';

import { CssBaseline } from '@material-ui/core';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// ----------------------------------------------------------------------------- Configuration
export interface JssBridgeProps {
  attach?: StyleSheet[];
}

export interface JssBridgeState {
  jss: any;
}

const classNameGenerator = createGenerateClassName();

// ----------------------------------------------------------------------------- Implementation
export class JssBridge extends PureComponent<JssBridgeProps, JssBridgeState> {

  private elementRef: RefObject<HTMLDivElement>;

  constructor(props: JssBridgeProps) {
    super(props);

    this.elementRef = createRef();

    this.state = {
      jss: null,
    };
  }

  componentDidMount() {
    const jss = create({ ...jssPreset(), insertionPoint: this.elementRef.current });

    jss.use(jssPluginGlobal);

    if (Boolean(this.props.attach)) {
      this.props.attach.forEach(styles => jss.createStyleSheet(styles as any).attach());
    }

    this.setState(() => ({
      jss,
    }));
  }

  // ----------------------------------------------------------------------------- Lifecycle methods
  render() {
    return (
      <div ref={ this.elementRef }>{
        Boolean(this.state.jss) &&
          <Fragment>
            <CssBaseline />

            <JssProvider jss={ this.state.jss } generateClassName={ classNameGenerator }>
              <div>
                { this.props.children }
              </div>
            </JssProvider>
          </Fragment>
      }</div>
    );
  }
}
