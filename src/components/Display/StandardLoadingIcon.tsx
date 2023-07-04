import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

export interface StandardLoadingIcon {
  isLoading?: boolean;
}

export function StandardLoadingIcon({
  isLoading,
}: StandardLoadingIcon): JSX.Element {
  return (
    <ActivityIndicator
      size={'large'}
      hidesWhenStopped
      animating={isLoading === undefined ? true : isLoading}
      color={colors.primary}
    />
  );
}
