import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog, Button} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {styles} from '../styles/styles';

interface DeleteCommentDialogProps {
  action: ActionCb;
  openBtnTitle: string;
}

/**
 * Dialog to confirm comment deletion.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {ActionCb} action Action when pressing Yes
 * @example
   const dialogAction = () => console.log('action');
   <DeleteCommentDialog
     openBtnTitle='Open Dialog'
     action={dialogAction} />
 */
export function DeleteCommentDialog(
  dialogProps: DeleteCommentDialogProps,
): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => setVisible(!visible);
  const accept = () => {
    dialogProps.action();
    toggleDialog();
  };
  const onPressButton = () => toggleDialog();

  return (
    <View>
      <Button
        buttonStyle={styles.buttonOpenDialogStyle}
        onPress={onPressButton}>
        <RegularText>{dialogProps.openBtnTitle}</RegularText>
      </Button>
      <Dialog
        overlayStyle={deleteCommentDialogStyles.container}
        style={deleteCommentDialogStyles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title titleStyle={styles.titleTextDialog} title="Warning" />
        <RegularText>Do you really want to delete this comment?</RegularText>
        <Dialog.Actions>
          <View style={styles.containerButtonDialog}>
            <Dialog.Button
              title="NO"
              buttonStyle={styles.noDialogButton}
              titleStyle={styles.subTextDialog}
              onPress={toggleDialog}
            />
            <Dialog.Button
              title="YES"
              buttonStyle={styles.yesDialogButton}
              titleStyle={styles.subTextDialog}
              onPress={accept}
            />
          </View>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const deleteCommentDialogStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
  },
});
