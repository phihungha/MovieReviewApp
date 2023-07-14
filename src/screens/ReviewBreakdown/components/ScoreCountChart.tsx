import React from 'react';
import {graphql} from 'relay-runtime';
import {ScoreCountChart$key} from './__generated__/ScoreCountChart.graphql';
import {useFragment} from 'react-relay';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {BarChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {RegularText} from '../../../components/Text/RegularText';

const ScoreCountChartFragment = graphql`
  fragment ScoreCountChart on Movie {
    score0count: numberOfReviewsPerScore(authorType: Regular, score: 0)
    score1count: numberOfReviewsPerScore(authorType: Regular, score: 1)
    score2count: numberOfReviewsPerScore(authorType: Regular, score: 2)
    score3count: numberOfReviewsPerScore(authorType: Regular, score: 3)
    score4count: numberOfReviewsPerScore(authorType: Regular, score: 4)
    score5count: numberOfReviewsPerScore(authorType: Regular, score: 5)
    score6count: numberOfReviewsPerScore(authorType: Regular, score: 6)
    score7count: numberOfReviewsPerScore(authorType: Regular, score: 7)
    score8count: numberOfReviewsPerScore(authorType: Regular, score: 8)
    score9count: numberOfReviewsPerScore(authorType: Regular, score: 9)
    score10count: numberOfReviewsPerScore(authorType: Regular, score: 10)
  }
`;

export interface ScoreCountChartProps {
  movie: ScoreCountChart$key | null;
  chartConfig: AbstractChartConfig;
}

export function ScoreCountChart(
  props: ScoreCountChartProps,
): React.JSX.Element {
  const data = useFragment(ScoreCountChartFragment, props.movie);

  const chartData: ChartData = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        data: [
          data?.score0count ?? 0,
          data?.score1count ?? 0,
          data?.score2count ?? 0,
          data?.score3count ?? 0,
          data?.score4count ?? 0,
          data?.score5count ?? 0,
          data?.score6count ?? 0,
          data?.score7count ?? 0,
          data?.score8count ?? 0,
          data?.score9count ?? 0,
          data?.score10count ?? 0,
        ],
      },
    ],
  };

  const barChartConfig: AbstractChartConfig = {
    ...props.chartConfig,
    decimalPlaces: 0,
    barPercentage: 0.5,
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={chartData}
        width={Dimensions.get('window').width - 20}
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        withHorizontalLabels={false}
        showValuesOnTopOfBars={true}
        style={styles.chart}
        chartConfig={barChartConfig}
      />
      <RegularText>Review count by Score</RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    borderRadius: 10,
  },
  container: {
    alignItems: 'center',
    gap: 10,
  },
});
