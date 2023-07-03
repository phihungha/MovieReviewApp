import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../styles/colors';

export interface ListScreenHeaderProps {
  children: React.ReactNode;
}

export function ListScreenHeader({children}: ListScreenHeaderProps) {
  return (
    <SafeAreaView>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.mediumBlack,
  },
});
