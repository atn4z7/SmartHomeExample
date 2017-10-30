import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { allDevicesSelector } from '../store/helper/selector';
import Colors from '../config/Colors';

import { STATUSBAR_HEIGHT } from '../util/common';

const { height, width } = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const BUTTON_MARGIN = SCREEN_HEIGHT * 0.0277 / 2;
const BUTTON_WIDTH = SCREEN_WIDTH * 0.848;
const BUTTON_HEIGHT = SCREEN_HEIGHT * 0.096;

class Home extends Component {
  _keyExtractor = item => item.slug;

  _renderItem = ({ item }) => (
    <Button
      large
      containerViewStyle={ styles.buttonContainer }
      backgroundColor={ Colors[item.type] }
      textStyle={ styles.buttonText }
      buttonStyle={ styles.button }
      title={ item.name }
      onPress={ () =>
        this.props.navigation.navigate('Device', {
          device_name: item.slug
        }) }
    />
  );

  render() {
    const { unit, navigation } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>{unit}</Text>
        </View>
        <View style={ styles.deviceList }>
          <FlatList
            data={ this.props.devices }
            keyExtractor={ this._keyExtractor }
            renderItem={ this._renderItem }
            scrollEnabled={ false }
          />
        </View>
        <View style={ styles.about }>
          <Button
            backgroundColor="white"
            textStyle={ [styles.buttonText, { color: Colors.btnDark }] }
            buttonStyle={ [
              styles.button,
              {
                borderWidth: 2,
                borderColor: 'rgba(0,0,0,0.5)'
              }
            ] }
            large
            title="About Us"
            onPress={ () => navigation.navigate('About') }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: STATUSBAR_HEIGHT
  },
  header: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deviceList: {
    flex: 0.55
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
  }
});

const mapStateToProps = state => ({
  unit: state.home.unit,
  devices: allDevicesSelector(state.home)
});

export default connect(mapStateToProps)(Home);
