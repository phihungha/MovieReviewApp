import {createTheme} from '@rneui/themed';
import colors from './colors';
import {fonts} from './typography';
import {DefaultTheme} from '@react-navigation/native';

export const theme = createTheme({
  darkColors: {
    primary: colors.darkBlack,
  },
  lightColors: {
    primary: colors.white,
  },
  mode: 'dark',

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

export const MainNavigationContainerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.darkBlack,
  },
};
