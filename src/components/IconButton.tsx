import {Text, StyleSheet, Pressable, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {ActionCb} from '../types/ActionCb';

interface IconButtonProps {
  iconName: string;
  count: number;
  text: string;
  onPress: ActionCb;
  style?: StyleProp<ViewStyle>;
}

/**
 * Generic count button.
 * @param {string} iconName Icon name
 * @param {number} count Count value
 * @param {string} text Text
 * @param {ActionCb} onPress Action on press
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CommentButton count={120} />
 */
export function CountButton(props: IconButtonProps) {
  const pressableStyle = StyleSheet.compose(styles.container, props.style);
  return (
    <Pressable
      style={pressableStyle}
      onPress={props.onPress}
      android_ripple={{color: 'gray'}}>
      <Icon style={styles.icon} name={props.iconName} />
      <Text style={styles.text}>
        {props.count} {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: colors.mediumBlack,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 'auto',
  },
  text: {
    color: colors.lightGrey,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
  },
  icon: {
    color: colors.lightGrey,
    fontSize: fontSizes.lg,
  },
});
