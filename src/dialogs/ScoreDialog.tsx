import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {Dialog} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {Button} from '@rneui/themed';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {styles} from '../styles/styles';
import {
  CustomSliderMarkerLeft,
  CustomSliderMarkerRight,
} from './CustomSliderMarker';

interface ScoreDialogProps {
  children: React.ReactNode;
}

/**
 *  props:
 *    body: title of text on openDialogButton
 *    action: the action when confirm the dialog (yes button), write in the code below
 *  using:
        <ScoreDialog>Open Dialog</ScoreDialog>
 *
 */
export function ScoreDialog(dialogProps: ScoreDialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState({values: [0, 10]});
  const sliderValueChange = (values: any) => {
    setValue({values});
  };

  const action = () => {
    console.log('action score dialog');
    // add the action here
    console.log('min: ', value.values[0]);
    console.log('max: ', value.values[1]);
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const accept = () => {
    action();
    toggleDialog();
  };

  const onPressButton = () => {
    toggleDialog();
  };
  return (
    <View>
      <Button
        buttonStyle={styles.buttonOpenDialogStyle}
        onPress={onPressButton}>
        <RegularText>{dialogProps.children} </RegularText>
      </Button>
      <Dialog
        overlayStyle={scoreDialogStyles.container}
        style={scoreDialogStyles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title
          titleStyle={styles.titleTextDialog}
          title="Input range?"
        />
        <RegularText>Enter range</RegularText>
        <View style={scoreDialogStyles.containerInput}>
          <MultiSlider
            values={[value.values[0], value.values[1]]}
            isMarkersSeparated={true}
            enabledTwo={true}
            enabledOne={true}
            trackStyle={scoreDialogStyles.slider}
            min={0}
            max={10}
            step={1}
            sliderLength={200}
            onValuesChange={sliderValueChange}
            customMarkerLeft={e => {
              return <CustomSliderMarkerLeft currentValue={e.currentValue} />;
            }}
            customMarkerRight={e => {
              return <CustomSliderMarkerRight currentValue={e.currentValue} />;
            }}
          />
        </View>
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

const scoreDialogStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlack,
    paddingVertical: 12,
  },
  slider: {},
  containerInput: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: 'auto',
  },
});
