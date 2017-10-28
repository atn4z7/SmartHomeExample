import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class Device extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={ styles.container }>
        <Button
          large
          title="Door Lock"
          onPress={ () =>
            this.props.navigation.navigate('History', {
              device_name: navigation.state.params.device_name
            }) }
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Device);
