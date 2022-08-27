import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type AppStackParamList = {
  Root: undefined;
}

export type RootTabParamList = {
  Home: undefined;
  Friends: undefined;
  GlobalChart: undefined;
}

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>

