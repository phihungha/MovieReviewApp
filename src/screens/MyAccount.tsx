import React, {Suspense, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {TitleText} from '../components/Text/TitleText';
import {Button, Icon} from '@rneui/themed';
import {StandardAvatar} from '../components/Display/StandardAvatar';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import colors from '../styles/colors';
import {InfoSection, LinkInfoSection} from './UserDetails/UserDetails';
import {SectionText} from '../components/Text/SectionText';
import {StandardLoadingIcon} from '../components/Display/StandardLoadingIcon';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function MyAccountScreen({navigation}: {navigation: any}): JSX.Element {
  const [uri, setUri] = useState('');
  const userName = 'Don Weak';
  const userBirthday = '1/1/2023';
  const userCountry = 'VietNam';
  const userFavoriteGenres = 'Drama, Action';
  const userType = 'Critic';
  const userBlogUrl = 'www.aaaaaa.com';

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };
  const onPressImage = async () => {
    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response?.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response?.assets) {
        const uriResult = response.assets?.at(0)?.uri;
        setUri(uriResult ? uriResult : '');
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <StandardAvatar size={150} uri={uri} onPress={onPressImage} />
        <TitleText>{userName ?? 'N/A'}</TitleText>
      </View>

      <View style={styles.infoBox}>
        <InfoSection
          name="Birthday"
          value={userBirthday}
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
          name="Country"
          value={userCountry}
          icon={
            <Icon
              type="fontisto"
              name="earth"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="Favorite genres"
          value={userFavoriteGenres}
          icon={
            <Icon
              type="antdesign"
              name="heart"
              size={20}
              color={colors.primary}
            />
          }
        />

        <InfoSection
          name="User type"
          value={userType}
          icon={
            <Icon
              type="material-community"
              name="account-tie"
              size={20}
              color={colors.primary}
            />
          }
        />

        {userType === 'Critic' ? (
          <LinkInfoSection
            name="Website"
            value={userBlogUrl}
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
      <View style={styles.buttonsContainer}>
        <Button
          title="Edit profile"
          icon={{
            name: 'user',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerButtonStyle}
        />
        <Button
          title="Log out"
          icon={{
            name: 'logout',
            type: 'material-community',
            size: 15,
            color: 'white',
          }}
          iconRight
          titleStyle={styles.titleStyle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.containerButtonStyle}
        />
      </View>

      <View style={styles.listSection}>
        <SectionText>Recently Watched</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          {/* <UserReviewOverviewList user={user} /> */}
        </Suspense>
        <Button
          title="More..."
          buttonStyle={styles.buttonStyle}
          containerStyle={[styles.containerButtonStyle]}
          onPress={() => navigation.navigate('MyReviewsList')}
        />
      </View>

      <View style={styles.listSection}>
        <SectionText>Recently Reviewed</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          {/* <UserReviewOverviewList user={user} /> */}
        </Suspense>
        <Button
          title="More..."
          buttonStyle={styles.buttonStyle}
          containerStyle={[styles.containerButtonStyle]}
        />
      </View>

      <View style={styles.listSection}>
        <SectionText>Recently Liked</SectionText>
        <Suspense fallback={<StandardLoadingIcon />}>
          {/* <UserReviewOverviewList user={user} /> */}
        </Suspense>
        <Button
          title="More..."
          buttonStyle={styles.buttonStyle}
          containerStyle={[styles.containerButtonStyle]}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
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
    gap: 5,
  },
  buttonStyle: {
    backgroundColor: colors.mediumBlack,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
  },
  containerButtonStyle: {marginHorizontal: 4, marginVertical: 10, flex: 1},
  titleStyle: {marginTop: 4},
});
