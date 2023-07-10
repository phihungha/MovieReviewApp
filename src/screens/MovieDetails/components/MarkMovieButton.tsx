import {Button, ButtonProps} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

type MarkMovieButtonProps = ButtonProps & {
  isViewed: boolean;
};

export function MarkMovieButton(
  props: MarkMovieButtonProps,
): React.JSX.Element {
  const [isViewed, setViewed] = useState(props.isViewed);
  const onPress = () => {
    setViewed(!isViewed);
  };
  return (
    <Button
      onPress={onPress}
      containerStyle={style.containerStyle}
      icon={{
        type: 'ionicon',
        name: 'eye',
        size: 28,
        color: colors.white,
      }}
      buttonStyle={[
        style.buttonStyle,
        isViewed ? style.buttonStyle_marked : style.buttonStyle_not_marked,
      ]}
      {...props}
    />
  );
}

const style = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    right: 30,
    top: -30,
  },
  buttonStyle: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  buttonStyle_not_marked: {
    backgroundColor: colors.primary,
  },
  buttonStyle_marked: {
    backgroundColor: colors.green,
  },
});
