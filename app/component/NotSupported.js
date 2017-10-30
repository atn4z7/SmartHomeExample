import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

const animationJson = require('../animation/empty.json');

export default class NotSupported extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Animation
          ref={ (animation) => {
            this.animation = animation;
          } }
          style={ {
            width: 248,
            height: 187
          } }
          source={ animationJson }
          loop
        />
        <Text>Not Supported</Text>
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
