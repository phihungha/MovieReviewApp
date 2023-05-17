import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RegularText} from '../components/RegularText';

interface SliderProps {
  currentValue: number;
}

export function CustomSliderMarkerLeft(props: SliderProps): JSX.Element {
  return (
    <View style={markerStyles.container}>
      <RegularText>Min</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}

export function CustomSliderMarkerRight(props: SliderProps): JSX.Element {
  return (
    <View style={markerStyles.container}>
      <RegularText>Max</RegularText>
      <RegularText>{props.currentValue}</RegularText>
    </View>
  );
}

const markerStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
