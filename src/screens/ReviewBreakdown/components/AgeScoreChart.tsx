import React from 'react';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {BarChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {AgeScoreChart$key} from './__generated__/AgeScoreChart.graphql';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {RegularText} from '../../../components/Text/RegularText';
import {getRoundedScore} from '../../../utils/number-conversion';

const AgeScoreChartFragment = graphql`
  fragment AgeScoreChart on Movie {
    age14to20score: regularScoreByCriteria(minAge: 14, maxAge: 20)
    age21to30score: regularScoreByCriteria(minAge: 21, maxAge: 30)
    age31to50score: regularScoreByCriteria(minAge: 31, maxAge: 50)
    age51score: regularScoreByCriteria(minAge: 51)
  }
`;

export interface AgeScoreChartProps {
  movie: AgeScoreChart$key | null;
  chartConfig: AbstractChartConfig;
}

export function AgeScoreChart(props: AgeScoreChartProps): React.JSX.Element {
  const data = useFragment(AgeScoreChartFragment, props.movie);

  const chartData: ChartData = {
    labels: ['14-20', '21-30', '31-50', '> 51'],
    datasets: [
      {
        data: [
          getRoundedScore(data?.age14to20score ?? 0),
          getRoundedScore(data?.age21to30score ?? 0),
          getRoundedScore(data?.age31to50score ?? 0),
          getRoundedScore(data?.age51score ?? 0),
        ],
      },
    ],
  };

  const barChartConfig: AbstractChartConfig = {
    ...props.chartConfig,
    decimalPlaces: 1,
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={chartData}
        width={Dimensions.get('window').width - 20}
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        showValuesOnTopOfBars={true}
        style={styles.chart}
        chartConfig={barChartConfig}
      />
      <RegularText>Average score by Age range</RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  chart: {
    borderRadius: 10,
  },
});
