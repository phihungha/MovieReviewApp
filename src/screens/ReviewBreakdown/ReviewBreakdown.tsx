import React from 'react';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {useContext} from 'react';
import {usePreloadedQuery} from 'react-relay';
import type {ReviewBreakdownQuery as ReviewBreakdownQueryType} from './__generated__/ReviewBreakdownQuery.graphql';
import {ScrollView, StyleSheet} from 'react-native';
import {ScoreCountChart} from './components/ScoreCountChart';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import colors from '../../styles/colors';
import {GenderScoreChart} from './components/GenderScoreChart';
import {AgeScoreChart} from './components/AgeScoreChart';

export const ReviewBreakdownQuery = graphql`
  query ReviewBreakdownQuery($id: ID!) {
    movie(id: $id) {
      ...ScoreCountChart
      ...GenderScoreChart
      ...AgeScoreChart
    }
  }
`;

export function ReviewBreakdownScreen(): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.ReviewBreakdown.queryRef) {
    return <></>;
  }
  return <ReviewBreakdownScreenWithData />;
}

function ReviewBreakdownScreenWithData(): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery<ReviewBreakdownQueryType>(
    ReviewBreakdownQuery,
    preloadedQueries!.ReviewBreakdown.queryRef!,
  );

  const chartConfig: AbstractChartConfig = {
    backgroundColor: colors.mediumBlack,
    backgroundGradientFrom: colors.mediumBlack,
    backgroundGradientTo: colors.mediumBlack,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForLabels: {
      fontSize: 14,
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScoreCountChart movie={data.movie} chartConfig={chartConfig} />
      <GenderScoreChart movie={data.movie} chartConfig={chartConfig} />
      <AgeScoreChart movie={data.movie} chartConfig={chartConfig} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    margin: 10,
  },
});
