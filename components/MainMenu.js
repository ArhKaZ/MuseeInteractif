import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert, SafeAreaView } from 'react-native';

const   Menu = ({navigation}) => {
    return (
                <View style={main_menu.body}>
                    <Pressable style={main_menu.buttonclick} onPress={() => navigation.navigate('Quizz')}>
                        <Text>Quizz</Text>
                    </Pressable>
                    <Pressable style={main_menu.buttonclick} onPress={() => Alert.alert('Faire redirection Info')}>
                        <Text>Info</Text>
                    </Pressable>
                    <Pressable style={main_menu.buttonclick} onPress={() => Alert.alert('Faire redirection Classement')}>
                        <Text>Classement</Text>
                    </Pressable>
                    <Pressable style={main_menu.buttonclick} onPress={() => Alert.alert('Faire redirection Aide')}>
                        <Text>Aide</Text>
                    </Pressable>
                    <Pressable style={main_menu.buttonclick} onPress={() => Alert.alert('Faire redirection Crédit')}>
                        <Text>Crédit</Text>
                    </Pressable>
                </View>
    );
};

const main_menu = StyleSheet.create({
    body: {
        margin:0,
        padding:0,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        borderWidth: 4,
    },
    buttonclick: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        borderWidth: 4,
    },
});

export default Menu;