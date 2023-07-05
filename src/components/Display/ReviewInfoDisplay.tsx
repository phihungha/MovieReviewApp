import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {graphql} from 'relay-runtime';
import {ReviewInfoDisplay$key} from './__generated__/ReviewInfoDisplay.graphql';
import {useFragment} from 'react-relay';
import {SectionText} from '../Text/SectionText';
import {dateToStandardDateFormat} from '../../utils/time-conversion';

const ReviewInfoDisplayFragment = graphql`
  fragment ReviewInfoDisplay on Review {
    title
    content
    postTime
    score
  }
`;

export interface ReviewInfoDisplayProps {
  review: ReviewInfoDisplay$key | null;
  maxContentLineCount?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Displays info of a review.
 * @param {StyleProp<ViewStyle>?} style Style
 */
export function ReviewInfoDisplay(
  props: ReviewInfoDisplayProps,
): React.JSX.Element {
  const data = useFragment(ReviewInfoDisplayFragment, props.review);
  return (
    <View style={StyleSheet.compose(styles.container, props.style)}>
      <SectionText>{data?.title ?? 'N/A'}</SectionText>
      <RegularText>
        {dateToStandardDateFormat(new Date(data?.postTime))}
      </RegularText>
      <CriticReviewScoreIndicator score={data?.score} />
      <RegularText numberOfLines={props.maxContentLineCount}>
        {data?.content ?? 'N/A'}
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
    gap: 5,
  },
});
