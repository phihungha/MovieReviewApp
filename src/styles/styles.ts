import {StyleSheet} from 'react-native';
import {fontSizes, fonts} from './typography';
import colors from './colors';

export const styles = StyleSheet.create({
  textDefault: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    color: colors.white,
  },
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
  fontSize16: {
    fontSize: fontSizes.lg,
  },
  marginEnd8: {
    marginEnd: 8,
  },
  marginBotton6: {
    marginBottom: 6,
  },
  colorPrimayBackground: {
    backgroundColor: colors.primary,
  },
  colorWhite: {
    color: colors.white,
  },
});
