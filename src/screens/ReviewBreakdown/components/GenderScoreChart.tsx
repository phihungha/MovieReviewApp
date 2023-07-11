import React from 'react';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {BarChart} from 'react-native-chart-kit';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import {GenderScoreChart$key} from './__generated__/GenderScoreChart.graphql';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {RegularText} from '../../../components/Text/RegularText';

const GenderScoreChartFragment = graphql`
  fragment GenderScoreChart on Movie {
    maleScore: regularScoreByCriteria(gender: Male)
    femaleScore: regularScoreByCriteria(gender: Female)
    otherScore: regularScoreByCriteria(gender: Other)
  }
`;

export interface GenderScoreChartProps {
  movie: GenderScoreChart$key | null;
  chartConfig: AbstractChartConfig;
}

export function GenderScoreChart(
  props: GenderScoreChartProps,
): React.JSX.Element {
  const data = useFragment(GenderScoreChartFragment, props.movie);

  const chartData: ChartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        data: [
          data?.maleScore ?? 0,
          data?.femaleScore ?? 0,
          data?.otherScore ?? 0,
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
      <RegularText>Average score by Gender</RegularText>
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
