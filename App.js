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
    		<TouchableOpacity
    			style={[styles.button, { backgroundColor: DefconFiveButton }]}
    			onPress={() => this.handleAudioSound('defconFive')}
    		>
    			<Text style={styles.buttonText}>Leave me alone!</Text>
    		</TouchableOpacity>
    	</View>
      <View style={styles.buttonContainer}>
    		<TouchableOpacity
    			style={[styles.button, { backgroundColor: DefconFourButton }]}
    			onPress={() => this.handleAudioSound('defconFour')}
    		>
    			<Text style={styles.buttonText}>I have a fiance!</Text>
    		</TouchableOpacity>
    	</View>
      <View style={styles.buttonContainer}>
    		<TouchableOpacity
    			style={[styles.button, { backgroundColor: DefconThreeButton }]}
    			onPress={() => this.handleAudioSound('defconThree')}
    		>
    			<Text style={styles.buttonText}>My dad's a cop!</Text>
    		</TouchableOpacity>
    	</View>
      <View style={styles.buttonContainer}>
    		<TouchableOpacity
    			style={[styles.button, { backgroundColor: DefconTwoButton }]}
    			onPress={() => this.handleAudioSound('defconTwo')}
    		>
    			<Text style={styles.buttonText}>HELP!</Text>
    		</TouchableOpacity>
    	</View>
      <View style={styles.buttonContainer}>
    		<TouchableOpacity
    			style={[styles.button, { backgroundColor: DefconOneButton }]}
    			// onPress={() => this.handleAudioSound('defconOne')}
          onPress={this.emergencyCall} activityOpacity={0.7}
    		>
    			<Text style={styles.buttonText}>Speed Dial</Text>
    		</TouchableOpacity>
    	</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    margin: 5,
    height: '20%',
  },
  buttonText: {
    color: 'black',
    fontSize: 20
  }
});
