import React from 'react';
import {graphql} from 'relay-runtime';
import {HorizontalProfileDisplay} from './HorizontalProfileDisplay';
import {HorizontalUserDisplay$key} from './__generated__/HorizontalUserDisplay.graphql';
import {useFragment} from 'react-relay';
import {StyleProp, ViewStyle} from 'react-native';

const HorizontalUserDisplayFragment = graphql`
  fragment HorizontalUserDisplay on User {
    avatarUrl
    name
    userType
  }
`;

export interface HorizontalUserDisplayProps {
  user: HorizontalUserDisplay$key | null;
  style?: StyleProp<ViewStyle>;
}

export function HorizontalUserDisplay({
  user,
  style,
}: HorizontalUserDisplayProps): React.JSX.Element {
  const data = useFragment(HorizontalUserDisplayFragment, user);
  return (
    <HorizontalProfileDisplay
      name={data?.name}
      imageUrl={data?.avatarUrl}
      role={data?.userType}
      style={style}
      nameInitialsAsPlaceholder
    />
  );
}
