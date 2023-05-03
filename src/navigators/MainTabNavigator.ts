import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type MainTabParams = {
  Home: undefined;
  MovieList: undefined;
  MyAccount: undefined;
};

export const MainTabNavigator = createBottomTabNavigator<MainTabParams>();
