import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';

const GlobalChartScreen = () => {
    const { signOut } = useAuth();
    const handlePress = async () => {
        try {
            await signOut();
        }
        catch (err) {
            console.log("Sign out err: " , err);
        }
    }
    return (
        <View>
            <Button title='Log out' onPress={handlePress} />
            <Text>Global Chart</Text>
            <Text>Coming Soon</Text>
        </View>
    )
}

export default GlobalChartScreen