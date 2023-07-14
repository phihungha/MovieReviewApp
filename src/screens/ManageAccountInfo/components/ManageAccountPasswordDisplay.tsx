import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BigTitleText} from '../../../components/Text/BigTitleText';
import colors from '../../../styles/colors';
import {OnSelectedManageInformation} from './ManageAccountInformationItem';
import {ItemSubtitleText} from '../../../components/Text/ItemSubtitleText';
import {Input} from '@rneui/themed';

interface ManageAccountPasswordDisplayProps {
  currentPassword: string;
  onSelectedCurrentPassword: OnSelectedManageInformation;

  passwordValue: string;
  onSelectedPassword: OnSelectedManageInformation;

  rePasswordValue: string;
  onSelectedRePassword: OnSelectedManageInformation;
}

export function ManageAccountPasswordDisplay(
  props: ManageAccountPasswordDisplayProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Change password</BigTitleText>
      </View>
      <View>
        <ItemSubtitleText>Current password</ItemSubtitleText>
        <Input
          secureTextEntry
          value={props.currentPassword}
          onChangeText={(item: string) => props.onSelectedCurrentPassword(item)}
          placeholder="Enter your password..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>

      <View>
        <ItemSubtitleText>New password</ItemSubtitleText>
        <Input
          secureTextEntry
          value={props.passwordValue}
          onChangeText={(item: string) => props.onSelectedPassword(item)}
          placeholder="Enter your password..."
          inputContainerStyle={styles.input}
          renderErrorMessage={false}
        />
      </View>

      <View>
        <ItemSubtitleText>Re-enter password</ItemSubtitleText>
        <Input
          secureTextEntry
          value={props.rePasswordValue}
          onChangeText={(item: string) => props.onSelectedRePassword(item)}
          placeholder="Re-enter your password..."
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.mediumBlack,
    paddingTop: 5,
  },
});
