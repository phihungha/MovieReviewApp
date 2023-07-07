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
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputContainerStyle: {
        backgroundColor: colors.mediumBlack,
        borderRadius: 12,
        borderColor: 'transparent',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 0,
      },
      inputStyle: {
        fontWeight: 'normal',
        color: colors.white,
        fontSize: fontSizes.sm,
        fontFamily: fonts.primary,
      },
      labelStyle: {
        fontFamily: fonts.primary,
        fontWeight: 'normal',
        color: colors.lightGrey,
        zIndex: 100,
        fontSize: fontSizes.sm,
        marginBottom: -28,
        marginStart: 20,
      },
    },

    SearchBar: {
      inputContainerStyle: {
        backgroundColor: colors.mediumBlack,
      },
    },

    Tab: {
      variant: 'primary',
      indicatorStyle: {
        backgroundColor: colors.primary,
        height: '100%',
        zIndex: 0,
      },
      containerStyle: {
        zIndex: 1,
        backgroundColor: 'transparent',
      },
    },
    TabItem: {
      buttonStyle: {
        padding: 0,
      },
      titleStyle: {
        fontFamily: fonts.primaryBold,
      },
    },
    TabView: {
      tabItemContainerStyle: {
        padding: 10,
      },
    },
    TabViewItem: {
      style: {width: '100%'},
    },
  },
});
