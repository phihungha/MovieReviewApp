import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import colors from '../../styles/colors';
import {RegularText} from '../Text/RegularText';

export interface ItemCardProps {
  content?: string;
  style?: StyleProp<TextStyle>;
}

export function ItemCard(props: ItemCardProps) {
  return <RegularText style={styles.text}>{props.content}</RegularText>;
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.mediumBlack,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
