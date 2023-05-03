import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type MoviesListStackParams = MainStackParams & {
  MoviesList: undefined;
};

export const MoviesListStackNavigator =
  createNativeStackNavigator<MoviesListStackParams>();
