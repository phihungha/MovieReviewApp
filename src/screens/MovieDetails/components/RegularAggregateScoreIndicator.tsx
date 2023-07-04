import React from 'react';
import {StyleSheet} from 'react-native';
import {AggregateScoreIndicator} from './AggregateScoreIndicator';
import colors from '../../../styles/colors';
import {fontSizes, fonts} from '../../../styles/typography';
import {graphql} from 'relay-runtime';
import {RegularAggregateScoreIndicator$key} from './__generated__/RegularAggregateScoreIndicator.graphql';
import {useFragment} from 'react-relay';

const RegularAggregateScoreIndicatorFragment = graphql`
  fragment RegularAggregateScoreIndicator on Movie {
    regularScore
    regularReviewCount
  }
`;

export interface RegularAggregateScoreIndicatorProps {
  movie?: RegularAggregateScoreIndicator$key | null;
}

/**
 * Display regular users' aggregate score and review count.
 */
export function RegularAggregateScoreIndicator(
  props: RegularAggregateScoreIndicatorProps,
): JSX.Element {
  if (!props.movie) {
    return (
      <AggregateScoreIndicator
        iconName="star"
        title="Regular"
        isLeft={true}
        iconStyle={styles.regularIcon}
        textStyle={styles.scoreText}
      />
    );
  }
  return <RegularAggregateScoreIndicatorWithData {...props} />;
}

function RegularAggregateScoreIndicatorWithData(
  props: RegularAggregateScoreIndicatorProps,
): JSX.Element {
  const data = useFragment(
    RegularAggregateScoreIndicatorFragment,
    props.movie!,
  );

  return (
    <AggregateScoreIndicator
      iconName="star"
      title="Regular"
      score={data.regularScore}
      reviewCount={data.regularReviewCount}
      isLeft={false}
      iconStyle={styles.regularIcon}
      textStyle={styles.scoreText}
    />
  );
}

const styles = StyleSheet.create({
  regularIcon: {
    fontSize: fontSizes.xl2,
    color: colors.darkBlue,
  },
  scoreText: {
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
});
