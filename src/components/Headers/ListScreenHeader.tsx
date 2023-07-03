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
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.mediumBlack,
  },
});
