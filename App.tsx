import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/modules/navigation/Navigation';
import AuthProvider from './src/modules/auth/AuthProvider';
import { store, StoreContext } from './src/modules/stores/store';

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <Navigation />
        <StatusBar style="auto" />
      </AuthProvider>
    </StoreContext.Provider>
  );
}