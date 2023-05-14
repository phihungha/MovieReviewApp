import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {DialogProps} from '../props/DialogProps';
import {Dialog} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {Button} from '@rneui/themed';

/**
 *  props:
 *    buttonOpenDialogText: title of text on openDialogButton
 *    action: the action when confirm the dialog (yes button)
 *  using:
      const dialogAction = () => {
        console.log('action');
      };
    <DeleteCommentDialog buttonOpenDialogText="Delete" action={dialogAction} />
 *
 */
export function DeleteCommentDialog(dialogProps: DialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const accept = () => {
    dialogProps.action();
    toggleDialog();
  };
  const onPressButton = () => {
    toggleDialog();
  };
  return (
    <View>
      <Button buttonStyle={styles.buttonOpenStyle} onPress={onPressButton}>
        <RegularText text={dialogProps.buttonOpenDialogText} />
      </Button>
      <Dialog
        overlayStyle={styles.container}
        style={styles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title titleStyle={styles.titleText} title="Warning?" />
        <RegularText text="Are you sure to delete this comment?" />
        <Dialog.Actions>
          <View style={styles.containerButton}>
            <Dialog.Button
              title="NO"
              buttonStyle={styles.noButton}
              titleStyle={styles.subText}
              onPress={toggleDialog}
            />
            <Dialog.Button
              title="YES"
              buttonStyle={styles.yesButton}
              titleStyle={styles.subText}
              onPress={accept}
            />
          </View>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
  },
  containerButton: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,

    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    height: 'auto',
  },
  buttonOpenStyle: {
    backgroundColor: colors.mediumBlack,
    borderRadius: 8,
  },
  yesButton: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  noButton: {
    borderRadius: 12,
    backgroundColor: 'none',
    borderWidth: 0.5,
    borderColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  titleText: {
    color: colors.white,
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.lg,
    textAlign: 'left',
  },
  subText: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    textAlign: 'left',
  },
});
