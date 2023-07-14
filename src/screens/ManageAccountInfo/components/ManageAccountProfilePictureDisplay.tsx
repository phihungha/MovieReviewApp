import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '@rneui/themed';
import {BigTitleText} from '../../../components/Text/BigTitleText';
import {TitleText} from '../../../components/Text/TitleText';
import colors from '../../../styles/colors';
import {OnSelectedManageInformation} from './ManageAccountInformationItem';
import {OnChangedCb} from '../../../types/OnChangedCb';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';

interface ManageAccountProfilePictureProps {
  imageUri?: string;
  nameValue: string;
  onSelectedName: OnSelectedManageInformation;
  onSelectedImage: OnChangedCb<string>;
}

/**
 * @using display the profile picture in ManageAccountInfo Screen
 * @param {string} imageUri uri of image
 * @param {string} nameValue name of user
 * @param {OnSelectedName} onSelectedName action clicked when accept changing name from dialog (change name)
 * @param {ActionCb} onSelectedImage action clicked on Edit (change image)
 */
export function ManageAccountProfilePictureDisplay(
  props: ManageAccountProfilePictureProps,
): JSX.Element {
  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };

  const onPressImage = async () => {
    await launchImageLibrary(options, response => {
      if (response?.assets) {
        const uriResult = response.assets?.at(0)?.uri;
        props.onSelectedImage(uriResult ? uriResult : '');
      }
    });
  };

  return (
    <View style={styles.container}>
      <BigTitleText style={styles.titleLine}>
        Change profile picture
      </BigTitleText>

      <View style={styles.avatarContainer}>
        <StandardAvatar
          size={128}
          uri={props.imageUri}
          onPress={onPressImage}
        />

        <TitleText>{props.nameValue}</TitleText>

        <Input
          label="Name"
          value={props.nameValue}
          onChangeText={props.onSelectedName}
          placeholder="Enter name..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  titleLine: {
    alignSelf: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    backgroundColor: colors.mediumBlack,
  },
});
