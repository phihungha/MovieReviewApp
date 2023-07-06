import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GenericDialog} from '../../../dialogs/GenericDialog';
import {Input} from '@rneui/themed';
import colors from '../../../styles/colors';

export type OnSelectedName = (name: string) => void;

export interface ChangeNameProps {
  openBtnTitle: string;
  onSelectedName: OnSelectedName;
}

/**
 * Dialog to input changing name.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {OnSelectedName} onSelectedName Receive selection result

 */
export function ChangeNameDialog(props: ChangeNameProps): JSX.Element {
  const [nameInput, setNameInput] = useState('');
  const onConfirm = () => props.onSelectedName(nameInput);
  return (
    <View>
      <GenericDialog
        openBtnTitle={props.openBtnTitle}
        title="Input your name"
        message="Type your name you want to change"
        onOk={onConfirm}>
        <View style={styles.container}>
          <Input
            label="Name"
            value={nameInput}
            onChangeText={setNameInput}
            placeholder="Enter name..."
            inputContainerStyle={styles.input}
          />
        </View>
      </GenericDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  input: {
    backgroundColor: colors.darkBlack,
  },
});
