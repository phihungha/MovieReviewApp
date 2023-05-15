import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {Dialog} from '@rneui/themed';
import {RegularText} from '../components/RegularText';
import {Button} from '@rneui/themed';
import {ScoreDialogProps} from '../props/DialogProps';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

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
      <Button buttonStyle={styles.buttonOpenStyle} onPress={onPressButton}>
        <RegularText>{dialogProps.buttonOpenDialogText} </RegularText>
      </Button>
      <Dialog
        overlayStyle={styles.container}
        style={styles.container}
        isVisible={visible}
        onBackdropPress={toggleDialog}>
        <Dialog.Title titleStyle={styles.titleText} title="Input range?" />
        <RegularText>Enter range</RegularText>
        <View style={styles.containerInput}>
          <MultiSlider
            values={[value.values[0], value.values[1]]}
            isMarkersSeparated={true}
            enabledTwo={true}
            enabledOne={true}
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

interface SliderProps {
  currentValue: number;
}

function CustomSliderMarkerLeft(props: SliderProps): JSX.Element {
  return (
    <View>
      <RegularText>Min</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}
function CustomSliderMarkerRight(props: SliderProps): JSX.Element {
  return (
    <View>
      <RegularText>Max</RegularText>
      <RegularText>{props.currentValue}</RegularText>
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
