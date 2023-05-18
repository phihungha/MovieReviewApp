import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from '@rneui/themed';

interface IconReviewScoreProps {
  iconName: string;
  score: number;
  isCriticUser: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Generic count button.
 * @param {string} iconName Icon name
 * @param {number} score score value
 * @param {boolean} isCriticUser True if component is the score of Critic user
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <IconReviewScore
      iconName="star"
      score={props.score}
      isCriticUser={false}
      style={props.style}
    />
 */
export function IconReviewScore(props: IconReviewScoreProps) {
  return (
    <View style={[reviewScoreStyles.container, props.style]}>
      <Icon
        name={props.iconName}
        style={[
          props.isCriticUser
            ? reviewScoreStyles.itemCriticUser
            : reviewScoreStyles.itemRegularUser,
          reviewScoreStyles.marginEnd4,
        ]}
      />

      <Text
        style={[reviewScoreStyles.colorLightGrey, reviewScoreStyles.textScore]}>
        {props.score}
      </Text>
    </View>
  );
}

const reviewScoreStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  itemCriticUser: {
    fontSize: fontSizes.lg,
    color: colors.yellowStar,
  },
  itemRegularUser: {
    fontSize: fontSizes.lg,
    color: colors.blueStar,
  },
  textScore: {
    paddingTop: 4,
  },
  marginEnd4: {
    marginEnd: 4,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});
