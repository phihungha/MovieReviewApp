import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type UsersListStackParams = MainStackParams & {
  UserList: undefined;
};

export const UsersListStackNavigator =
  createNativeStackNavigator<UsersListStackParams>();
