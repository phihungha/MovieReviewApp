import React from 'react';
import {StyleSheet} from 'react-native';
import {AggregateScoreIndicator} from './AggregateScoreIndicator';
import {fontSizes, fonts} from '../../../styles/typography';
import colors from '../../../styles/colors';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {CriticAggregateScoreIndicator$key} from './__generated__/CriticAggregateScoreIndicator.graphql';

const CriticAggregateScoreIndicatorFragment = graphql`
  fragment CriticAggregateScoreIndicator on Movie {
    criticScore
    criticReviewCount
  }
`;

export interface CriticAggregateScoreIndicatorProps {
  movie: CriticAggregateScoreIndicator$key | null;
}

/**
 * Display critics' aggregate score and review count.
 */
export function CriticAggregateScoreIndicator({
  movie,
}: CriticAggregateScoreIndicatorProps): React.JSX.Element {
  const data = useFragment(CriticAggregateScoreIndicatorFragment, movie);
  return (
    <AggregateScoreIndicator
      iconName="star"
      title="Critic"
      score={data?.criticScore}
      reviewCount={data?.criticReviewCount}
      isLeft={true}
      iconStyle={styles.criticIcon}
      textStyle={styles.scoreText}
    />
  );
}

const styles = StyleSheet.create({
  criticIcon: {
    fontSize: fontSizes.xl2,
    color: colors.yellow,
  },
  scoreText: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
});
