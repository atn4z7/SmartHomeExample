import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Animation from 'lottie-react-native';
import { humanize, renderBackBtn } from '../util/common';
import Colors from '../config/Colors';

const animationJson = require('../image/animation/empty.json');

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width;

export default class NotSupported extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  _renderHeader() {
    const { name, navigation } = this.props;

    return (
      <View style={ styles.header }>
        <View style={ styles.navBar }>
          <View style={ styles.leftNavBtn }>{renderBackBtn(() => navigation.goBack())}</View>
          <View style={ styles.rightNavBtn } />
        </View>
        <View style={ styles.title }>
          <Text style={ styles.headerText }>{humanize(name)}</Text>
        </View>
      </View>
    );
  }

  _renderAnimation() {
    return (
      <View style={ styles.deviceList }>
        <View style={ styles.animation }>
          <Animation
            loop
            speed={ 0.4 }
            style={ styles.animation }
            source={ animationJson }
            ref={ (animation) => {
              this.animation = animation;
            } }
          />
        </View>
        <View style={ styles.explanation }>
          <Text style={ styles.smallText }>We are not supporting this device at the moment.</Text>
        </View>
      </View>
    );
  }

  _renderAbout() {
    return <View style={ styles.about } />;
  }

  render() {
    return (
      <View style={ styles.container }>
        {this._renderHeader()}
        {this._renderAnimation()}
        {this._renderAbout()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: SCREEN_WIDTH
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
    width: SCREEN_WIDTH * 1.1,
    height: SCREEN_WIDTH * 1.1 * 187 / 248,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  headerText: {
    fontSize: 30,
    color: Colors.text,
    fontWeight: '700'
  },
  about: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallText: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: '400',
    textAlign: 'center'
  },
  explanation: {
    flex: 1,
    paddingLeft: SCREEN_WIDTH / 6,
    paddingRight: SCREEN_WIDTH / 6
  }
});
