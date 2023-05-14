import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity style={styles.containerActive}>
        <Text style={styles.subTextActive}>{likeButtonProps.likeCount}</Text>
        <Icon style={styles.subTextActiveIcon} name="like1" />
        <Text style={styles.subTextActive}>Like</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.subText}>{likeButtonProps.likeCount}</Text>
        <Icon style={styles.subTextIcon} name="like2" />
        <Text style={styles.subText}>Like</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 'auto',
  },
  subText: {
    color: colors.lightGrey,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    verticalAlign: 'middle',
  },
  containerActive: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 'auto',
  },
  subTextActive: {
    color: colors.white,
    marginEnd: 8,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    verticalAlign: 'middle',
  },
  subTextIcon: {
    color: colors.lightGrey,
    marginEnd: 8,
    marginBottom: 4,
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    verticalAlign: 'middle',
  },

  subTextActiveIcon: {
    color: colors.white,
    marginEnd: 8,
    marginBottom: 4,

    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    verticalAlign: 'middle',
  },
});
