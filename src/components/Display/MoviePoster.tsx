import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

export interface MoviePosterProps {
  imageUrl?: string | null;
  style?: StyleProp<ImageStyle>;
}

/**
 * Display movie poster image.
 * @param {string | null | undefined} imageUrl Image URL
 * @param {StyleProp<ImageStyle>?} style Style
 */
export function MoviePoster(props: MoviePosterProps): JSX.Element {
  return (
    <Image
      style={[styles.posterImage, props.style]}
      resizeMode="cover"
      source={{uri: props.imageUrl ?? ''}}
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
