import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import Animation from 'lottie-react-native';
import { Button } from 'react-native-elements';
import { changeDeviceState } from '../store/Actions';
import {
  humanize,
  getTimeStamp,
  renderBackBtn,
  renderHistoryBtn,
  BUTTON_MARGIN,
  BUTTON_HEIGHT,
  BUTTON_WIDTH
} from '../util/common';
import Colors from '../config/Colors';

const animationJson = require('../animation/lock.json');

const { height, width } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

export default class Lock extends React.Component {
  componentWillMount() {
    if (this.props.state === 'locked') {
      this.setState({
        progress: new Animated.Value(0)
      });
    } else {
      this.setState({
        progress: new Animated.Value(0.5)
      });
    }
  }
  _getButtonTitle(currentState) {
    return currentState === 'locked' ? 'Unlock' : 'Lock';
  }
  _getNewState(currentState) {
    return currentState === 'locked' ? 'unlocked' : 'locked';
  }

  _renderHeader() {
    const { name, navigation } = this.props;

    return (
      <View style={ styles.header }>
        <View style={ styles.navBar }>
          <View style={ styles.leftNavBtn }>{renderBackBtn(() => navigation.goBack())}</View>
          <View style={ styles.rightNavBtn }>
            {renderHistoryBtn(() =>
              navigation.navigate('History', {
                device_name: name
              })
            )}
          </View>
        </View>
        <View style={ styles.title }>
          <Text style={ styles.headerText }>{humanize(name)}</Text>
        </View>
      </View>
    );
  }

  _renderToggleBtn() {
    const {
      type, state, name, dispatch
    } = this.props;

    return (
      <View style={ styles.about }>
        <Button
          large
          containerViewStyle={ styles.buttonContainer }
          backgroundColor={ Colors[type] }
          textStyle={ styles.buttonText }
          buttonStyle={ styles.button }
          title={ this._getButtonTitle(state) }
          onPress={ () => {
            this._playLockAnimation(this._getNewState(state));
            dispatch(changeDeviceState(name, this._getNewState(state), getTimeStamp()));
          } }
        />
      </View>
    );
  }

  _renderAnimation() {
    return (
      <View style={ styles.deviceList }>
        <View style={ styles.animation }>
          <Animation
            style={ styles.animation }
            source={ animationJson }
            progress={ this.state.progress }
          />
        </View>
      </View>
    );
  }

  _playLockAnimation(newState) {
    if (newState === 'unlocked' && this.state.progress._value === 0) {
      Animated.timing(this.state.progress, {
        toValue: 0.5,
        duration: 400
      }).start();
    } else if (newState === 'locked' && this.state.progress._value === 0.5) {
      Animated.timing(this.state.progress, {
        toValue: 0,
        duration: 400
      }).start();
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        {this._renderHeader()}
        {this._renderAnimation()}
        {this._renderToggleBtn()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: 'white'
  },
  header: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deviceList: {
    flex: 0.55,
    justifyContent: 'center'
  },
  animation: {
    width: 800 * SCREEN_HEIGHT * 0.55 / 600,
    height: SCREEN_HEIGHT * 0.55,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  headerText: {
    fontSize: 30,
    color: Colors.text,
    fontWeight: '700'
  },
  buttonContainer: {
    borderRadius: 2
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    margin: BUTTON_MARGIN,
    borderRadius: 2
  },
  buttonText: {
    fontSize: 20,
    color: Colors.btnWhite,
    fontWeight: '500'
  },
  about: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 0.6,
    alignItems: 'flex-start'
  },
  navBar: {
    flex: 0.4,
    flexDirection: 'row'
  },
  leftNavBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: SCREEN_WIDTH * 0.06
  },
  rightNavBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: SCREEN_WIDTH * 0.06
  }
});
