import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../../home/HomeScreen";
import { AppStackParamList } from "../../../types/navigation";
import { mainTheme } from '../../../themes/mainTheme';
import RootTab from '../../root/RootTab';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: mainTheme.PRIMARY_COLOR
    }}>
       <Stack.Screen name="Root" component={RootTab} options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;