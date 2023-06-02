import React from 'react';
import {StyleSheet,View} from 'react-native';
import { ReviewListItem } from '../Items/ReviewListItem';
import { VerticalAuthorDisplay } from '../Display/VerticalAuthorDisplay';

export function CommentListItem(): JSX.Element {
  return <View style={styles.container}>
      <View style={{ padding: 2 }}>
       <VerticalAuthorDisplay/>
      </View>
  
      <View style={{ padding: 2 }}>
        <ReviewListItem/>
      </View>     
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    padding: 0,
  },
});