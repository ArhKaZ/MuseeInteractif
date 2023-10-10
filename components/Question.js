import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import PlayerSound from './PlayerSound';

const QuestionPlayer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [audioKey, setAudioKey] = useState(0);
  const [sound, setSound] = useState(null);

  const questions = [
    {
      question: "Allez, tu vas voir elle est facile,\n En quelle année est sorti le premier Alien au cinéma",
      answers: [
        { text: '1979', isCorrect: true},
        { text: '1986', isCorrect: false},
        { text: '1992', isCorrect: false},
        { text: '1997', isCorrect: false},
      ],
    },
    {
      question: "Classique parmi les classiques : 2001 l’odyssée de l’espace.\n Tu te souviens du beau Danube bleu de Strauss et du bébé géant… \n mais quel était le nom de la navette Pan Am ?",
      answers: [
        { text: 'Galactica 1', isCorrect: false},
        { text: 'Orbital 2', isCorrect: false},
        { text: 'Orion 3', isCorrect: true},
        { text: 'Saturn IV', isCorrect: false},
      
      ]
    }];

  const playSound = (isCorrect) => {
    setAudioKey(audioKey + 1);
    setCurrentQuestion(currentQuestion + 1);
    setIsCorrect(isCorrect);
  };

  useEffect(() => {
    let interval;
    if (sound) {
      interval = setInterval(async () => {
        const status = await sound.getStatusAsync();
        const percentagePlayed = (status.positionMillis / status.durationMillis) * 100;
        if (percentagePlayed >= 60 && currentQuestion < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        }
      }, 1000); // Check every second
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [sound, currentQuestion]);


  
  return (
    <View>
      { currentQuestion < questions.length ? (
        <View>
          <Text>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].answers.map((answers, index) => (
            <Button
              key={index}
              title={answers.text}
              onPress={() => playSound(answers.isCorrect)}
            />
          ))}
      </View>
      ) : (
        <Text>Quizz Fini : points</Text>
      )}
      <PlayerSound keysound={audioKey} isCorrect={isCorrect} sound={sound} setSound={setSound}/>
      </View>
  );
};

export default QuestionPlayer;