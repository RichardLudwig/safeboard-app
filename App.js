import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import { Audio } from 'expo-av';

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
  defconTwo: require('./assets/audio/defconTwo.mp3')
}

export default function App() {
  handleAudioSound = async sound => {
    const audioObject = new Audio.Sound()

    try {
      let source = buttonSounds[sound]
      await audioObject.loadAsync(source)
      await audioObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            audioObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        }).catch(error => {
          console.log(error);
        })
    } catch(error) {
      console.log(error);
    }
  }

  emergencyCall = () => {
    // android settings
    // enter emergency phone number after $ symbol
    let phoneNumber = 'tel:$';

    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <View style={styles.buttonInner}>
            <TouchableOpacity
              style={[styles.buttonInner, { backgroundColor: DefconFiveButton }]}
              onPress={() => this.handleAudioSound('defconFive')}
            >
              <Text style={styles.buttonText}>Leave me alone!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.buttonInner}>
            <TouchableOpacity
              style={[styles.buttonInner, { backgroundColor: DefconFourButton }]}
              onPress={() => this.handleAudioSound('defconFour')}
            >
              <Text style={styles.buttonText}>I have a fiancé!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.buttonInner}>
            <TouchableOpacity
              style={[styles.buttonInner, { backgroundColor: DefconThreeButton }]}
              onPress={() => this.handleAudioSound('defconThree')}
            >
              <Text style={styles.buttonText}>My dad's a cop!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.buttonInner}>
            <TouchableOpacity
              style={[styles.buttonInner, { backgroundColor: DefconTwoButton }]}
              onPress={() => this.handleAudioSound('defconTwo')}
            >
              <Text style={styles.buttonText}>HELP!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.buttonBottom, { backgroundColor: DefconOneButton }]}
            onPress={this.emergencyCall} activityOpacity={0.7}
          >
            <Text style={styles.buttonBottomText}>ACCESS PHONE!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight
  },
  buttonContainer: {
    height: '100%',
    backgroundColor: '#292929',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
  },
  // generic button style
  button: {
    width: '50%',
    height: '40%',
    padding: 5
  },
  // button style for all but bottom buttons
  buttonInner: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  // button style for bottom
  buttonBottom: {
    width: '100%',
    height: '40%',
    padding: 5
  },
  // text style for all but bottom buttons
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // text style for bottom button
  buttonBottomText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
