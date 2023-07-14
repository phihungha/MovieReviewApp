import React from 'react';
import {VerticalProfileDisplay} from '../../../components/Display/VerticalProfileDisplay';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {CrewListItem$key} from './__generated__/CrewListItem.graphql';
import {StyleSheet} from 'react-native';

const CrewListItemFragment = graphql`
  fragment CrewListItem on WorkCredit {
    crew {
      name
      avatarUrl
    }
    role
  }
`;

export interface CrewListItemProps {
  crewMember: CrewListItem$key | null;
}

/**
 * Item for a list of non-actor crew members working on a film.
 */
export function CrewListItem({
  crewMember,
}: CrewListItemProps): React.JSX.Element {
  const data = useFragment(CrewListItemFragment, crewMember);
  return (
    <VerticalProfileDisplay
      style={styles.container}
      imageUrl={data?.crew.avatarUrl}
      name={data?.crew.name}
      role={data?.role}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    justifyContent: 'flex-start',
  },
});
