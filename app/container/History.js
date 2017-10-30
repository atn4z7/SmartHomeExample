import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { STATUSBAR_HEIGHT, renderBackBtn } from '../util/common';
import Colors from '../config/Colors';

const moment = require('moment');

const { height, width } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class History extends Component {
  _keyExtractor = item => item.timestamp;

  _renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#F1F1F1' : '#FFFFFF';

    return (
      <View style={ [styles.row, { backgroundColor }] }>
        <Text style={ styles.smallText }>{item.state}</Text>
        <Text style={ styles.smallText }>
          {moment(item.timestamp).format('MM/DD/YYYY h:mm:ss a')}
        </Text>
      </View>
    );
  };

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
          <Text style={ styles.headerText }>Last 10 interactions</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={ styles.container }>
        {this._renderHeader()}
        <FlatList
          data={ this.props.history }
          keyExtractor={ this._keyExtractor }
          renderItem={ this._renderItem }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: STATUSBAR_HEIGHT
  },
  row: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: (SCREEN_HEIGHT * 0.7 - STATUSBAR_HEIGHT) / 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  header: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    color: Colors.text,
    fontWeight: '700'
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
  smallText: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: '400',
    textAlign: 'center'
  }
});

const mapStateToProps = (state, props) => ({
  history: state.history[props.navigation.state.params.device_name]
});

export default connect(mapStateToProps)(History);
