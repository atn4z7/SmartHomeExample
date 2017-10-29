import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotSupported = () => (
  <View style={ styles.container }>
    <Text>Not Supported</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default NotSupported;
