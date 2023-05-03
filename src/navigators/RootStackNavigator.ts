import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

export const RootStackNavigator = createNativeStackNavigator<RootStackParams>();
