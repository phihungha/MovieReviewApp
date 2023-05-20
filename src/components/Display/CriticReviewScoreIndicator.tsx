import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontSizes} from '../../styles/typography';
import {ReviewScoreIndicator} from './ReviewScoreIndicator';
import {ReviewScoreIndicatorProps} from '../../props/ReviewIndicatorProps';

/**
 * Displays review score of a critic.
 * @param {number} score Score value
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CriticReviewScoreIndicator score={5} />
 */
export function CriticReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <ReviewScoreIndicator
      iconName="star"
      score={props.score}
      style={props.style}
      isLeft={true}
      iconStyle={styles.criticIcon}
    />
  );
}

const styles = StyleSheet.create({
  criticIcon: {
    fontSize: fontSizes.lg,
    color: colors.yellow,
  },
});
