import React, {useContext} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from '../Display/RegularReviewScoreIndicator';
import {ActionCb} from '../../types/ActionCb';
import {pressableRippleConfig} from '../../styles/pressable-ripple';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import type {MovieGridItemFragment$key} from './__generated__/MovieGridItemFragment.graphql';
import {MoviePoster} from '../Display/MoviePoster';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {ItemTitleText} from '../Text/ItemTitleText';
import {ItemSubtitleText} from '../Text/ItemSubtitleText';

const MovieGridItemFragment = graphql`
  fragment MovieGridItemFragment on Movie {
    id
    title
    posterUrl
    releaseDate
    criticScore
    regularScore
  }
`;

interface MovieGridItemProps {
  movie: MovieGridItemFragment$key | null;
  onPress?: ActionCb;
  onNavigate?: ActionCb;
  containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Item for a grid list of movies.
 */
export function MovieGridItem(props: MovieGridItemProps): JSX.Element {
  const data = useFragment(MovieGridItemFragment, props.movie);

  const preloadedQueries = useContext(PreloadedQueriesContext);

  const defaultOnPress = () => {
    if (data?.id) {
      preloadedQueries?.MovieDetails.loadQuery({id: data.id});
    }
    props.onNavigate?.();
  };
  const onPress = props.onPress ?? defaultOnPress;

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Pressable
        style={styles.contentContainer}
        onPress={onPress}
        android_ripple={pressableRippleConfig}>
        <MoviePoster imageUrl={data?.posterUrl} />
        <View style={styles.infoContainer}>
          <ItemTitleText>{data?.title}</ItemTitleText>
          <ItemSubtitleText>
            {new Date(data?.releaseDate).getFullYear()}
          </ItemSubtitleText>
          <View style={styles.scoresContainer}>
            <CriticReviewScoreIndicator score={data?.criticScore} />
            <RegularReviewScoreIndicator score={data?.regularScore} />
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
  infoContainer: {
    paddingHorizontal: 3,
  },
  scoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
