import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ReviewScoreIndicatorProps {
  score?: number | null;
  fullScore?: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
}
