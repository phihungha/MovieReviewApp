import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {Dialog} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {Button} from '@rneui/themed';
import {Input} from '@rneui/themed';
import {ScoreDialogProps} from '../props/DialogProps';

/**
 *  props:
 *    buttonOpenDialogText: title of text on openDialogButton
 *    action: the action when confirm the dialog (yes button), write in the code below
 *  using:
        <ScoreDialog buttonOpenDialogText="OpenDialog" />
 *
 */
export function ScoreDialog(dialogProps: ScoreDialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const action = () => {
    console.log('action score dialog');
    // add the action here
  };

  const toggleDialog = () => {
    setVisible(!visible);
    setMin('');
    setMax('');
  };

  const accept = () => {
    if (min <= max && min != null && max != null) {
      action();
      toggleDialog();
    } else {
      Alert.alert('Please fill the value!!!');
    }
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
        <Dialog.Title titleStyle={styles.titleText} title="Input range?" />
        <RegularText text="Enter range" />
        <View style={styles.containerInput}>
          <Input
            inputStyle={styles.input}
            inputMode="numeric"
            label="Min"
            value={min}
            onChangeText={setMin}
          />
          <Input
            inputStyle={styles.input}
            inputMode="numeric"
            label="Max"
            value={max}
            onChangeText={setMax}
          />
        </View>
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
    backgroundColor: colors.darkBlack,
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
  containerInput: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    width: '50%',
    height: 'auto',
  },
  input: {},
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
