import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainTabParams = {
  Homepage: undefined;
  MovieList: undefined;
  MyAccount: undefined;
};

export const mainTabNavigator = createNativeStackNavigator<MainTabParams>();
