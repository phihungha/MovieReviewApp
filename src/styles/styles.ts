import {StyleSheet} from 'react-native';
import {fontSizes, fonts} from './typography';
import colors from './colors';

export const styles = StyleSheet.create({
  textDefault: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    color: colors.white,
  },
});
