import React from 'react';
import {VerticalProfileDisplay} from '../../../components/Display/VerticalProfileDisplay';
import {graphql} from 'relay-runtime';
import {ActorListItem$key} from './__generated__/ActorListItem.graphql';
import {useFragment} from 'react-relay';
import {StyleSheet} from 'react-native';

const ActorListItemFragment = graphql`
  fragment ActorListItem on ActingCredit {
    actor {
      avatarUrl
      name
    }
    characterName
  }
`;

export interface ActorListItemProps {
  actingCredit: ActorListItem$key | null;
}

/**
 * Item for list of actors working on a film.
 */
export function ActorListItem({actingCredit}: ActorListItemProps): JSX.Element {
  const data = useFragment(ActorListItemFragment, actingCredit);
  return (
    <VerticalProfileDisplay
      style={styles.container}
      imageUrl={data?.actor.avatarUrl}
      name={data?.actor.name}
      role={data?.characterName}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
  },
});
