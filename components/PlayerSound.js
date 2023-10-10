import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import intro from '../assets/audio/INTRO.mp3';
import goodresponse1 from '../assets/audio/rg1.mp3';
import goodresponse2 from '../assets/audio/rg2.mp3';
import wrongresponse1 from '../assets/audio/wr1.mp3';
import wrongresponse2 from '../assets/audio/wr2.mp3';

const PlayerSound = ({ keysound, isCorrect, sound, setSound }) => {
  const [audio, setAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async (soundFile) => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setAudio(sound);
    setSound(sound); // Set the sound in the parent component
    setIsPlaying(true);
    await sound.playAsync();
    return sound;
  };

  const handlePlayPause = async () => {
    isPlaying ? await audio.pauseAsync() : await audio.playAsync();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let soundFile;
    if (keysound > 0) {
      if (keysound === 1) {
        soundFile = isCorrect ? goodresponse1 : wrongresponse1;
      } else if (keysound === 2) {
        soundFile = isCorrect ? goodresponse2 : wrongresponse2;
      }
    } else {
      soundFile = intro;
    }
    if (soundFile) {
      const loadedSound = playSound(soundFile);
      return () => {
        console.log('Unloading Sound');
        loadedSound.unloadAsync();
      }
    }
  }, [keysound, isCorrect]);

  useEffect(() => {
    return audio
      ? () => {
        console.log('Unloading Sound');
        audio.unloadAsync();
      }
      : undefined;
  }, [audio]);

  return (
    <View>
      <TouchableOpacity onPress={handlePlayPause}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlayerSound;