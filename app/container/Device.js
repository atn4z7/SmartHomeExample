import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Lock from '../component/Lock';
import NotSupported from '../component/NotSupported';
import { STATUSBAR_HEIGHT } from '../util/common';

class Device extends Component {
  _renderLock() {
    const { device, dispatch, navigation } = this.props;

    return (
      <Lock
        name={ device.slug }
        type={ device.type }
        state={ device.state }
        dispatch={ dispatch }
        navigation={ navigation }
      />
    );
  }

  _renderNotSupported() {
    const { device, navigation } = this.props;
    return <NotSupported name={ device.slug } navigation={ navigation } />;
  }

  render() {
    const { device } = this.props;
    let view;

    switch (device.type) {
      case 'lock':
        view = this._renderLock();
        break;
      default:
        view = this._renderNotSupported();
    }

    return <View style={ styles.container }>{view}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: STATUSBAR_HEIGHT
  }
});

const mapStateToProps = (state, props) => ({
  device: state.home.devices[props.navigation.state.params.device_name]
});

export default connect(mapStateToProps)(Device);
