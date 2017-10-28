import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';

const { Store, Persistor } = configureStore();

export default class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={ Store }>
        <PersistGate loading={ null } persistor={ Persistor }>
          <View style={ styles.container }>
            <Text style={ styles.welcome }>Welcome to React Native!</Text>
            <Text style={ styles.instructions }>To get started, edit App.js</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
