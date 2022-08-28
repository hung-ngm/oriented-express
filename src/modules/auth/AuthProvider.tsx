import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from '../stores/store';
import { auth } from '../utils/firebase';
import { LogBox } from 'react-native';

interface Props {
  children: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { setUser } = useStore().userStore;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    
    return () => {      
      unsubscribe();
    }
  }, [setUser])

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer"]);
  }, [])

  return <>{children}</>
}

export default AuthProvider;