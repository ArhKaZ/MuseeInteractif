import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import Questions from '../components/Questions';
import AudioPlayer from '../components/Question';
import QuestionPlayer from '../components/Question';

const Quizz = () => {
    // Chercher pour le temps avant d'afficher les reponses
    // Faire lecteur component
    // Gerer changement d'audio sans changer de page !!
  const questionnb = 0;
  const point = 0;
  const gdanswer = false;
  return (
    <QuestionPlayer/>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#112'
    },
  });
  
export default Quizz;