import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import TrackProgress from './TrackProgress';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState(null);

  useEffect(() => {
      setup();
  }, []);

  const setup = async () => {
    let isSetup = false;
    try {
      await TrackPlayer.getDuration();
      isSetup = true;
    }
    catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '0',
      url: require('../assets/INTRO.mp3'),
      duration: 3.09,
    });
    isSetup = true;
    }
  }

  const setCurrentSong = async () => {
    const current = await TrackPlayer.getCurrentTrack();
    const song = await TrackPlayer.getTrack(current);
    setSong(song);
  }

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayback}>
        <Text style={styles.player}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    width: '13%',
    height: '4%',
    alignItems: 'center',
    borderWidth: 3
  },
  player: {
    flex:1,
    fontSize:14
  }
});

export default Player;