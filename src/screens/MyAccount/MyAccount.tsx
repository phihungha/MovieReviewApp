import React, {Suspense, useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {TitleText} from '../../components/Text/TitleText';
import {Button, Icon} from '@rneui/themed';
import colors from '../../styles/colors';
import {InfoSection, LinkInfoSection} from '../UserDetails/UserDetails';
import {SectionText} from '../../components/Text/SectionText';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {graphql} from 'relay-runtime';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyAccountStackParams} from '../../navigators/MyAccountStackNavigator';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import {dateToStandardDateFormat} from '../../utils/time-conversion';
import {UserThankedReviewOverviewList} from '../UserDetails/components/UserThankedReviewOverviewList';
import {UserWatchedOverviewList} from '../UserDetails/components/UserWatchedOverviewList';
import {UserReviewOverviewList} from '../UserDetails/components/UserReviewOverviewList';
import {UpdatableAvatar} from './components/UpdatableAvatar';
import {ActionButtons} from './components/ActionButtons';

export const MyAccountQuery = graphql`
  query MyAccountQuery {
    viewer {
      id
      name
      dateOfBirth
      gender
      username
      userType
      blogUrl
      ...UpdatableAvatar
      ...UserReviewOverviewList
      ...UserThankedReviewOverviewList
      ...UserWatchedOverviewList
    }
  }
`;

type MyAccountScreenProps = NativeStackScreenProps<
  MyAccountStackParams,
  'MyAccount'
>;

export function MyAccountScreen(
  props: MyAccountScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.MyAccount.queryRef) {
    return <></>;
  }

  return <MyAccountScreenWithData {...props} />;
}

function MyAccountScreenWithData(
  props: MyAccountScreenProps,
): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery(
    MyAccountQuery,
    preloadedQueries!.MyAccount.queryRef!,
  );

  const user = data.viewer;
  const userId = user?.id;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <UpdatableAvatar user={user} />
        <TitleText>{user?.name ?? 'N/A'}</TitleText>
      </View>
      <View style={styles.infoBox}>
        <InfoSection
          name="Username"
          value={user?.username}
          icon={
            <Icon
              type="font-awesome"
              name="user"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="Gender"
          value={user?.gender}
          icon={
            <Icon
              type="foundation"
              name="male-female"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="Date of birth"
          value={dateToStandardDateFormat(user?.dateOfBirth)}
          icon={
            <Icon
              type="font-awesome"
              name="birthday-cake"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="User type"
          value={user?.userType}
          icon={
            <Icon
              type="material-community"
              name="account-tie"
              size={20}
              color={colors.primary}
            />
          }
        />

        {user?.userType === 'Critic' ? (
          <LinkInfoSection
            name="Website"
            value={user?.blogUrl}
            icon={
              <Icon
                type="material-community"
                name="web"
                size={20}
                color={colors.primary}
              />
            }
          />
        ) : undefined}
      </View>

      <ActionButtons {...props} />

      <View style={styles.listSection}>
        <SectionText>Reviews</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserReviewOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            props.navigation.navigate('UserReviewList', {isPersonal: true});
            if (userId) {
              preloadedQueries?.UserReviewList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>
      <View style={styles.listSection}>
        <SectionText>Thanked reviews</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserThankedReviewOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            props.navigation.navigate('UserThankedReviewList', {
              isPersonal: true,
            });
            if (userId) {
              preloadedQueries?.UserThankedReviewList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>
      <View style={styles.listSection}>
        <SectionText>Recently Watched</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          <UserWatchedOverviewList user={user} />
        </Suspense>
        <Button
          onPress={() => {
            props.navigation.navigate('UserWatchedList', {isPersonal: true});
            if (userId) {
              preloadedQueries?.UserWatchedList.loadQuery({id: userId});
            }
          }}>
          More...
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  infoBox: {
    padding: 15,
    backgroundColor: colors.mediumBlack,
    borderRadius: 15,
    gap: 10,
  },
  listSection: {
    gap: 10,
  },
});
