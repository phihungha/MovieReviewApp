import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from './MainStackParams';

export type UserListStackParams = MainStackParams & {
  UserList: undefined;
};

export const UserListStackNavigator =
  createNativeStackNavigator<UserListStackParams>();
