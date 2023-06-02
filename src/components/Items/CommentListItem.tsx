import React from 'react';
import {StyleSheet,View} from 'react-native';
import {Image, Text} from 'react-native';
import { ReviewListItem } from '../Items/ReviewListItem';
import { VerticalAuthorDisplay } from '../Display/VerticalAuthorDisplay';
import { LikeButton } from '../Buttons/LikeButton';
import { SectionText } from '../Text/SectionText';
import { TitleText } from '../Text/TitleText';
import { SubtitleText } from '../Text/SubtitleText';
import { RegularText } from '../Text/RegularText';
import colors from '../../styles/colors';

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