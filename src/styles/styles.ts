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
  buttonOpenDialogStyle: {
    backgroundColor: colors.mediumBlack,
    borderRadius: 8,
  },
  yesDialogButton: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  noDialogButton: {
    borderRadius: 12,
    backgroundColor: 'none',
    borderWidth: 0.5,
    borderColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  titleTextDialog: {
    color: colors.white,
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.lg,
    textAlign: 'left',
  },
  subTextDialog: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    textAlign: 'left',
  },
  containerButtonDialog: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
});
