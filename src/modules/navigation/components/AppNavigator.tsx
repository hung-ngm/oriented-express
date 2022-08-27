import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppNavigator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>AppNavigator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 10
    }
})

export default AppNavigator;