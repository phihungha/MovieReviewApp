import {StyleProp, ViewStyle} from 'react-native';

export interface ProfileDisplayProps {
  imageUrl: string;
  name?: string;
  role?: string;
  style?: StyleProp<ViewStyle>;
}
