import {createTheme} from '@rneui/themed';
import colors from './colors';
import {fonts} from './typography';

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
        fontFamily: fonts.primary_bold,
      },
    },

    Text: {
      style: {
        fontFamily: fonts.primary,
        color: colors.white,
      },
    },
  },
});
