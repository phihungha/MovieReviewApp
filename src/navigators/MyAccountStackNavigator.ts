import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type MyAccountStackParams = MainStackParams & {
  MyAccount: undefined;
};

export const MyAccountStackNavigator =
  createNativeStackNavigator<MyAccountStackParams>();
