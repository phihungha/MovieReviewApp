import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../Display/RegularReviewScoreIndicator';
import {TitleText} from '../Text/TitleText';
import {SubtitleText} from '../Text/SubtitleText';

/**
 * Item for a grid list of movies.
 */
export function MovieGridItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.posterImage}
        source={{
          uri: 'https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg',
        }}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <TitleText>John Wick</TitleText>
        <SubtitleText>2014</SubtitleText>
        <View style={styles.scoresContainer}>
          <CriticReviewScoreIndicator score={8.3} />
          <RegularReviewScoreIndicator score={8.5} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    gap: 5,
  },
  posterImage: {
    width: 125,
    height: 125,
    borderRadius: 5,
  },
  infoContainer: {
    paddingHorizontal: 3,
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
