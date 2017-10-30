import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { allDevicesSelector } from '../store/helper/selector';
import Colors from '../config/Colors';

import { STATUSBAR_HEIGHT, BUTTON_MARGIN, BUTTON_HEIGHT, BUTTON_WIDTH } from '../util/common';

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

  _renderHeader() {
    return (
      <View style={ styles.header }>
        <View style={ styles.navBar } />
        <View style={ styles.title }>
          <Text style={ styles.headerText }>{this.props.unit}</Text>
        </View>
      </View>
    );
  }

  _renderAbout() {
    return (
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
          onPress={ () => this.props.navigation.navigate('About') }
        />
      </View>
    );
  }

  _renderDeviceList() {
    return (
      <View style={ styles.deviceList }>
        <FlatList
          data={ this.props.devices }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem }
          scrollEnabled={ false }
        />
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        {this._renderHeader()}
        {this._renderDeviceList()}
        {this._renderAbout()}
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
    flex: 0.55,
    alignItems: 'center'
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
  },
  title: {
    flex: 0.6,
    alignItems: 'flex-start'
  },
  navBar: {
    flex: 0.4,
    flexDirection: 'row'
  }
});

const mapStateToProps = state => ({
  unit: state.home.unit,
  devices: allDevicesSelector(state.home)
});

export default connect(mapStateToProps)(Home);
