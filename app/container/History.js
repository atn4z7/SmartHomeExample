import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class History extends Component {
  _keyExtractor = item => item.timestamp;

  _renderItem = ({ item }) => (
    <View>
      <Text>{item.timestamp}</Text>
      <Text>{item.state}</Text>
    </View>
  );

  render() {
    return (
      <View style={ styles.container }>
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
    backgroundColor: 'white'
  }
});

const mapStateToProps = (state, props) => ({
  history: state.history[props.navigation.state.params.device_name]
});

export default connect(mapStateToProps)(History);
