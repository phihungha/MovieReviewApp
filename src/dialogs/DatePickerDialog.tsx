import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type OnSelectedDate = (date: Date) => void;

interface DatePickerDialogProps {
  onSelectedDate: OnSelectedDate;
  date: Date;
  iconColor?: string;
  iconSize?: number;
}

/**
 * @using display component as an icon and open datePicker on clicked
 * @param {OnSelectedDate} onSelectedDate Receive selection date result
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 */
export function DatePickerDialog(props: DatePickerDialogProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || props.date;
    setVisible(false);
    props.onSelectedDate(currentDate);
  };

  const openDialog = () => {
    setVisible(true);
  };

  return (
    <Icon
      name="calendar"
      color={props.iconColor}
      size={props.iconSize}
      style={styles.container}
      onPress={openDialog}>
      {visible && (
        <DateTimePicker
          value={props.date}
          mode="date"
          is24Hour
          display="default"
          onChange={onChange}
        />
      )}
    </Icon>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
