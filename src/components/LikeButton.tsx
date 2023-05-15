import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {LikeButtonProps} from '../props/LikeButtonProps';
import {styles} from '../styles/styles';

/**
 *  props:
 *    body: the like count want to display
 *    isActive: set the like button active or inactive
 *  using: <LikeButton isActive={true}>120</LikeButton>;
 *
 */
export function LikeButton(likeButtonProps: LikeButtonProps): JSX.Element {
  if (likeButtonProps.isActive) {
    const styleContainerActive = StyleSheet.compose(
      styles.containerMediumBlackCorner,
      styles.colorPrimayBackground,
    );
    const styleTextActive = StyleSheet.flatten([
      styles.subTextLikeComment,
      styles.marginEnd8,
      styles.colorWhite,
    ]);
    const styleIconActive = StyleSheet.flatten([
      styles.subTextLikeComment,
      styles.marginEnd8,
      styles.fontSize16,
      styles.colorWhite,
      styles.marginBotton6,
    ]);
    return (
      <TouchableOpacity style={styleContainerActive}>
        <Text style={styleTextActive}>{likeButtonProps.children}</Text>
        <Icon style={styleIconActive} name="like1" />
        <Text style={styleTextActive}>Like</Text>
      </TouchableOpacity>
    );
  } else {
    const styleText = StyleSheet.compose(
      styles.subTextLikeComment,
      styles.marginEnd8,
    );
    const styleIcon = StyleSheet.flatten([
      styles.subTextLikeComment,
      styles.marginEnd8,
      styles.fontSize16,
      styles.marginBotton6,
    ]);
    return (
      <TouchableOpacity style={styles.containerMediumBlackCorner}>
        <Text style={styleText}>{likeButtonProps.children}</Text>
        <Icon style={styleIcon} name="like2" />
        <Text style={styleText}>Like</Text>
      </TouchableOpacity>
    );
  }
}
