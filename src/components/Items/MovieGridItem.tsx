import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Image} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../Display/RegularReviewScoreIndicator';
import {TitleText} from '../Text/TitleText';
import {SubtitleText} from '../Text/SubtitleText';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import type {MovieGridItemFragment$key} from './__generated__/MovieGridItemFragment.graphql';

const MovieGridItemFragment = graphql`
  fragment MovieGridItemFragment on Movie {
    title
    posterUrl
    releaseDate
    criticScore
    regularScore
  }
`;

interface MovieGridItemProps {
  movie: MovieGridItemFragment$key;
  onPress?: ActionCb;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Item for a grid list of movies.
 */
export function MovieGridItem(props: MovieGridItemProps): JSX.Element {
  const data = useFragment(MovieGridItemFragment, props.movie);
  return (
    <View style={StyleSheet.compose(styles.container, props.containerStyle)}>
      <Pressable
        style={styles.contentContainer}
        onPress={props.onPress}
        android_ripple={pressableRippleConfig}>
        <Image
          style={styles.posterImage}
          source={{
            uri: data.posterUrl ?? '',
          }}
          resizeMode="cover"
        />
        <View style={styles.infoContainer}>
          <TitleText>{data.title}</TitleText>
          <SubtitleText>{data.releaseDate}</SubtitleText>
          <View style={styles.scoresContainer}>
            <CriticReviewScoreIndicator score={data.criticScore} />
            <RegularReviewScoreIndicator score={data.regularScore} />
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
