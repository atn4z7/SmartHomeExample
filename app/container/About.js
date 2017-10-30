import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { renderBackBtn, STATUSBAR_HEIGHT } from '../util/common';
import Colors from '../config/Colors';

const { height, width } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const CASAIQ_LOGO = require('../image/casaiq_logo.png');

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about:
        'A Smart Home Solution Custom-built for Apartments, Condos, and Multifamily Real Estate.'
    };
  }
  _renderHeader() {
    return (
      <View style={ styles.header }>
        <View style={ styles.navBar }>
          <View style={ styles.leftNavBtn }>
            {renderBackBtn(() => this.props.navigation.goBack())}
          </View>
          <View style={ styles.rightNavBtn } />
        </View>
        <View style={ styles.title }>
          <Text style={ styles.headerText }>About Us</Text>
        </View>
      </View>
    );
  }

  _renderAboutUs() {
    return (
      <View style={ styles.deviceList }>
        <View style={ styles.animation }>
          <Image
            source={ CASAIQ_LOGO }
            style={ { width: SCREEN_WIDTH * 0.736, height: SCREEN_WIDTH * 0.736 * 111 / 552 } }
          />
        </View>
        <View style={ styles.explanation }>
          <Text style={ styles.smallText }>{this.state.about}</Text>
        </View>
      </View>
    );
  }

  _renderFooter() {
    return <View style={ styles.about } />;
  }

  render() {
    return (
      <View style={ styles.container }>
        {this._renderHeader()}
        {this._renderAboutUs()}
        {this._renderFooter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    paddingTop: STATUSBAR_HEIGHT
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
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    color: Colors.text,
    fontWeight: '700'
  },
  footer: {
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
