import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BigTitleText} from '../Text/BigTitleText';
import {TextLink} from '../Buttons/TextLink';
import {TitleText} from '../Text/TitleText';
import colors from '../../styles/colors';
import {ActionCb} from '../../types/ActionCb';

interface ManageAccountProfilePictureProps {
  imageUri?: string;
  name: string;
  onClickedText: ActionCb;
}

/**
 * @using display the profile picture in ManageAccountInfo Screen
 * @param {string} imageUri Receive selection country result
 * @param {string} name name of user
 * @param {ActionCb} onClickedText action clicked on Edit (change image)
 */
export function ManageAccountProfilePictureDisplay(
  props: ManageAccountProfilePictureProps,
): JSX.Element {
  const uri = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Profile Picture</BigTitleText>
        <TextLink text="" textLink="EDIT" onClicked={props.onClickedText} />
      </View>

      <View style={styles.avatarContainer}>
        <Avatar
          size={128}
          rounded
          source={{uri: props.imageUri ? props.imageUri : uri}}
        />
        <View style={styles.nameContainer}>
          <TitleText>{props.name}</TitleText>
          <Icon name="pen" size={20} color={colors.white} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  titleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
