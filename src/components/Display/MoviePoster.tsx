import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

export interface MoviePosterProps {
  posterUrl?: string | null;
  style: StyleProp<ImageStyle>;
}

export function MoviePoster(props: MoviePosterProps): JSX.Element {
  return (
    <Image
      style={[styles.posterImage, props.style]}
      source={{uri: props.posterUrl ?? ''}}
    />
  );
}

const styles = StyleSheet.create({
  posterImage: {
    width: '100%',
    aspectRatio: 0.67,
    borderRadius: 5,
  },
});
