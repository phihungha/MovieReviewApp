import {StyleProp, ViewStyle} from 'react-native';

export interface ProfileDisplayProps {
  imageUrl?: string | null;
  name?: string;
  role?: string;
  nameInitialsAsPlaceholder?: boolean;
  style?: StyleProp<ViewStyle>;
}
