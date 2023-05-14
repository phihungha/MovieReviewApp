import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {LikeButtonProps} from '../props/LikeButtonProps';

/**
 *  props:
 *    likeCount: the like count want to display
 *    isActive: set the like button active or inactive
 *  using: <LikeButton likeCount="12K" isActive={true}></LikeButton>;
 *
 */
export function LikeButton(likeButtonProps: LikeButtonProps): JSX.Element {
  if (likeButtonProps.isActive) {
    return (
      <View style={styles.containerActive}>
        <Text style={styles.subTextActive}>{likeButtonProps.likeCount}</Text>
        <Icon style={styles.subTextActive} name="like1" />
        <Text style={styles.subTextActive}>Like</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.subText}>{likeButtonProps.likeCount}</Text>
        <Icon style={styles.subText} name="like2" />
        <Text style={styles.subText}>Like</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,

    justifyContent: 'center',
    alignItems: 'center',

    width: 'auto',
    height: 'auto',
  },
  containerActive: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    paddingVertical: 12,

    justifyContent: 'center',
    alignItems: 'center',

    width: 'auto',
    height: 'auto',
  },
  subText: {
    color: colors.lightGrey,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    height: '100%',
    textAlign: 'center',
  },
  subTextActive: {
    color: colors.white,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    height: '100%',
    textAlign: 'center',
  },
});
