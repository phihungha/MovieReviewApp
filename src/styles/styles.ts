import {StyleSheet} from 'react-native';
import {fontSizes, fonts} from './typography';
import colors from './colors';

export const styles = StyleSheet.create({
  containerMediumBlackCorner: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 'auto',
  },
  subTextLikeComment: {
    color: colors.lightGrey,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    verticalAlign: 'middle',
  },
});
