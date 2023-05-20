import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import {fontSizes, fonts} from '../../styles/typography';
import {ActionCb} from '../../types/ActionCb';

interface IconButtonProps {
  iconName: string;
  count: number;
  text: string;
  onPress: ActionCb;
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Button that displays a count of something (e.g. comments, likes).
 * @param {string} iconName Icon name
 * @param {number} count Count value
 * @param {string} text Text
 * @param {ActionCb} onPress Action on press
 * @param {boolean} isActive True if button is active
 * @param {StyleProp<ViewStyle>} style Style
 */
export function CountButton(props: IconButtonProps) {
  const containerStyle = StyleSheet.compose(styles.container, props.style);
  return (
    <View style={containerStyle}>
      <Pressable
        style={[styles.pressable, props.isActive ? styles.activePressable : {}]}
        onPress={props.onPress}
        android_ripple={{
          color: props.isActive ? '#e3949f' : '#525252',
        }}>
        <Icon
          style={[styles.icon, props.isActive ? styles.activeIcon : {}]}
          name={props.iconName}
        />
        <Text style={[styles.text, props.isActive ? styles.activeText : {}]}>
          {props.count} {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: colors.mediumBlack,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressable: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
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
  activePressable: {
    backgroundColor: colors.primary,
  },
  activeText: {
    color: colors.white,
  },
  activeIcon: {
    color: colors.white,
  },
});
