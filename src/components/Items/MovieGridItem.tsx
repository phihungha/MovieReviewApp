import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Image} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../Display/RegularReviewScoreIndicator';
import {TitleText} from '../Text/TitleText';
import {SubtitleText} from '../Text/SubtitleText';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';

interface MovieGridItemProps {
  onPress?: ActionCb;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Item for a grid list of movies.
 */
export function MovieGridItem(props: MovieGridItemProps): JSX.Element {
  return (
    <View style={StyleSheet.compose(styles.container, props.containerStyle)}>
      <Pressable
        style={styles.contentContainer}
        onPress={props.onPress}
        android_ripple={pressableRippleConfig}>
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
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 155,
    borderRadius: 7,
    overflow: 'hidden',
  },
  contentContainer: {
    padding: 5,
    gap: 8,
  },
  posterImage: {
    width: '100%',
    aspectRatio: 1,
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
