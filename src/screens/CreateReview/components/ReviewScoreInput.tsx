import {AirbnbRating} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../../../components/Text/TitleText';

export type OnRating = (rating: number) => void;

interface ReviewScoreInputProps {
  score: number;
  onScoreChanged: (s: number) => void;
}

export function ReviewScoreInput(props: ReviewScoreInputProps): JSX.Element {
  return (
    <View>
      <TitleText>Rating</TitleText>

      <AirbnbRating
        reviews={[
          '1/10',
          '2/10',
          '3/10',
          '4/10',
          '5/10',
          '6/10',
          '7/10',
          '8/10',
          '9/10',
          '10/10',
        ]}
        showRating={false}
        ratingContainerStyle={styles.rateContainer}
        count={10}
        size={28}
        defaultRating={props.score}
        onFinishRating={props.onScoreChanged}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
});
