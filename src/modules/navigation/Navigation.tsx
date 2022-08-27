import React, { useEffect } from 'react';
import AppNavigator from './components/AppNavigator';
import AuthNavigator from './components/AuthNavigator';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { useStore } from '../stores/store';


const Navigation = () => {
  const { user } = useStore().userStore;
  let Navigator: JSX.Element = <></>;
  
  if (user) {
    Navigator = <AppNavigator />
  }
  else {
    Navigator = <AuthNavigator />
  }
  return (
    <NavigationContainer>
      {Navigator}
    </NavigationContainer>
  )
  
}

export default observer(Navigation);