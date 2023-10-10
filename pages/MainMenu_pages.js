import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import Menu from '../components/MainMenu';
import QuestionPlayer from '../components/Question';

const Stack = createNativeStackNavigator();
const MainMenu = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Quizz" component={QuestionPlayer}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainMenu;