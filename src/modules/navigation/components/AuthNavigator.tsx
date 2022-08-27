import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthNavigator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>AuthNavigator</Text>
        </View>
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