import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

export function StandardLoadingIcon(): JSX.Element {
  return <ActivityIndicator size={'large'} color={colors.primary} />;
}
