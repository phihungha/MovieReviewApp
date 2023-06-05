import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type UsersListStackParams = MainStackParams & {
  UsersList: undefined;
};

export const UsersListStackNavigator =
  createNativeStackNavigator<UsersListStackParams>();
