import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type MyAccountStackParams = MainStackParams & {
  MyAccount: undefined;
  MyWatchedList: undefined;
  MyReviewsList: undefined;
};

export const MyAccountStackNavigator =
  createNativeStackNavigator<MyAccountStackParams>();
