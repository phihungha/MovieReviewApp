import {StyleProp, ViewStyle} from 'react-native';

export interface AggregateScoreIndicatorProps {
  score: number;
  reviewCount: number;
  style?: StyleProp<ViewStyle>;
}
