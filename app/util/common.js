import React from 'react';
import { View, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const BACK_ICON = require('../image/ic_back.png');
const HISTORY_ICON = require('../image/ic_history.png');

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const BUTTON_MARGIN = SCREEN_HEIGHT * 0.0277 / 2;
export const BUTTON_WIDTH = SCREEN_WIDTH * 0.848;
export const BUTTON_HEIGHT = SCREEN_HEIGHT * 0.096;

export function getTimeStamp() {
  return Date.now();
}

// https://stackoverflow.com/questions/21792367/replace-underscores-with-spaces-and-capitalize-words
export function humanize(str) {
  const frags = str.split('-');
  let i;
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(' ');
}

export function renderBackBtn(onPress) {
  return (
    <View
      style={ {
        flex: 1,
        justifyContent: 'center'
      } }
    >
      <TouchableOpacity onPress={ onPress }>
        <Image
          source={ BACK_ICON }
          style={ { width: SCREEN_WIDTH * 0.08, height: SCREEN_WIDTH * 0.08 * 40 / 60 } }
        />
      </TouchableOpacity>
    </View>
  );
}

export function renderHistoryBtn(onPress) {
  return (
    <View
      style={ {
        flex: 1,
        justifyContent: 'center'
      } }
    >
      <TouchableOpacity onPress={ onPress }>
        <Image
          source={ HISTORY_ICON }
          style={ { width: SCREEN_WIDTH * 0.08, height: SCREEN_WIDTH * 0.08 * 51 / 60 } }
        />
      </TouchableOpacity>
    </View>
  );
}
