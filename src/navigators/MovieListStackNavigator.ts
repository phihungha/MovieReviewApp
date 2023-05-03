import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type MovieListStackParams = MainStackParams & {
  MovieList: undefined;
};

export const MovieListStackNavigator =
  createNativeStackNavigator<MovieListStackParams>();
