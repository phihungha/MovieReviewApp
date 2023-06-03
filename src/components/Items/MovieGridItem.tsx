import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../Display/RegularReviewScoreIndicator';
import {TitleText} from '../Text/TitleText';
import {SubtitleText} from '../Text/SubtitleText';

export function MovieGridItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.movieImage}
        source={{
          uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        }}
        resizeMode="cover"
      />
      <View style={styles.padding}>
        <TitleText>John Wick</TitleText>
        <SubtitleText>2014</SubtitleText>
        <View style={styles.row}>
          <CriticReviewScoreIndicator score={8.3} />
          <RegularReviewScoreIndicator score={8.3} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 125,
  },
  movieImage: {
    width: 125,
    height: 125,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  padding: {
    paddingHorizontal: 5,
    marginTop: 5,
  },
});
