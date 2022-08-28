import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/navigation';
import LoginScreen from '../../login/LoginScreen';
import SignupScreen from '../../signup/SignupScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 50
    }
})