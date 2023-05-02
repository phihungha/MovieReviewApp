import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainScreen: undefined;
};

export const rootStackNavigator = createNativeStackNavigator<RootStackParams>();
