import {StyleSheet, View} from 'react-native';

export function VerticalMovieListItemSeparator(): JSX.Element {
  return <View style={styles.verticalSeparator} />;
}

export function HorizontalMovieListItemSeparator(): JSX.Element {
  return <View style={styles.horizontalSeparator} />;
}

const styles = StyleSheet.create({
  horizontalSeparator: {
    width: 5,
  },
  verticalSeparator: {
    height: 5,
  },
});
