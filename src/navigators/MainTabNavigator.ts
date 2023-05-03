import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type MainTabParams = {
  Home: undefined;
  MovieList: undefined;
  MyAccount: undefined;
};

export const MainTabNavigator = createNativeStackNavigator<MainTabParams>();
