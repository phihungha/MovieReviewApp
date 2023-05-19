import {createTheme} from '@rneui/themed';
import colors from './colors';
import {fontSizes, fonts} from './typography';

export const theme = createTheme({
  mode: 'dark',

  darkColors: {
    primary: colors.darkBlack,
  },
  lightColors: {
    primary: colors.white,
  },

  components: {
    Button: {
      containerStyle: {},
      buttonStyle: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: colors.primary,
      },
      titleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryBold,
      },
    },

    Text: {
      style: {
        fontFamily: fonts.primary,
        color: colors.white,
      },
    },

    Input: {
      inputStyle: {
        fontFamily: fonts.primary,
        color: colors.white,
        backgroundColor: colors.mediumBlack,
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderWidth: 0,
        textDecorationLine: 'none',
        fontSize: fontSizes.lg,
      },
      labelStyle: {
        fontSize: fontSizes.md,
        fontFamily: fonts.primary,
        color: colors.lightGrey,
      },
    },
  },
});
