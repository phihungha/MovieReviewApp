import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type HomeStackParams = MainStackParams & {
  Home: undefined;
};

export const HomeStackNavigator = createNativeStackNavigator<HomeStackParams>();
