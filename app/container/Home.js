import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class Home extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Apartment 143</Text>
        <Button
          large
          title="Door Lock"
          onPress={ () => this.props.navigation.navigate('Device', { device_name: 'Lock' }) }
        />
        <Button
          large
          title="Light Switch"
          onPress={ () => this.props.navigation.navigate('Device', { device_name: 'Switch' }) }
        />
        <Button
          large
          title="Thermostat"
          onPress={ () => this.props.navigation.navigate('Device', { device_name: 'Thermostat' }) }
        />
        <Button large title="About Us" onPress={ () => this.props.navigation.navigate('About') } />
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

export default connect(mapStateToProps)(Home);
