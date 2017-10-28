import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
import RootNavigator from './navigator/RootNavigator';

const { Store, Persistor } = configureStore();

export default class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={ Store }>
        <PersistGate loading={ null } persistor={ Persistor }>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
