import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  DefconFiveButton,
  DefconFourButton,
  DefconThreeButton,
  DefconTwoButton,
  DefconOneButton
} from './constants/ButtonColors';

const buttonSounds = {
  defconFive: require('./assets/audio/defconFive.mp3'),
  defconFour: require('./assets/audio/defconFour.mp3'),
  defconThree: require('./assets/audio/defconThree.mp3'),
  defconTwo: require('./assets/audio/defconTwo.mp3'),
  defconOne: require('./assets/audio/defconOne.mp3')
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
