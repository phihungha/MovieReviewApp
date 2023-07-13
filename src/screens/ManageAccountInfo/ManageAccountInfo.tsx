import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';
import {ManageAccountProfilePictureDisplay} from './components/ManageAccountProfilePictureDisplay';
import {ManageAccountInformationDisplay} from './components/ManageAccountInformationDisplay';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {ManageAccountPasswordDisplay} from './components/ManageAccountPasswordDisplay';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MyAccountStackParams} from '../../navigators/MyAccountStackNavigator';
import {useMutation, usePreloadedQuery} from 'react-relay';
import auth from '@react-native-firebase/auth';
import type {ManageAccountInfoRegularMutation as ManageAccountInfoRegularMutationType} from './__generated__/ManageAccountInfoRegularMutation.graphql';
import type {ManageAccountInfoCriticMutation as ManageAccountInfoCriticMutationType} from './__generated__/ManageAccountInfoCriticMutation.graphql';
import {Gender} from './__generated__/ManageAccountInfoQuery.graphql';
import Snackbar from 'react-native-snackbar';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';
import {dateToIsoDateStr} from '../../utils/time-conversion';

const BASE_AVATAR_URL =
  'https://cinerate-movie-review-service.s3.ap-southeast-1.amazonaws.com/public/userProfileImages/';

export const ManageAccountInfoQuery = graphql`
  query ManageAccountInfoQuery {
    viewer {
      name
      username
      gender
      dateOfBirth
      blogUrl
      userType
    }
    userProfileImageUploadUrl
  }
`;

const ManageAccountInfoRegularMutation = graphql`
  mutation ManageAccountInfoRegularMutation($input: RegularUserUpdateInput!) {
    updateRegularUser(input: $input) {
      ... on MutationUpdateRegularUserSuccess {
        data {
          id
        }
      }
      ... on ValidationError {
        message
      }
    }
  }
`;

const ManageAccountInfoCriticMutation = graphql`
  mutation ManageAccountInfoCriticMutation($input: CriticUserUpdateInput!) {
    updateCriticUser(input: $input) {
      ... on MutationUpdateCriticUserSuccess {
        data {
          id
        }
      }
      ... on ValidationError {
        message
      }
    }
  }
`;

async function uploadProfileImage(uploadUrl: string, imageUri: string) {
  try {
    await fetch(uploadUrl, {
      method: 'PUT',
      body: {uri: imageUri, type: 'image/jpg', name: 'profile.jpg'},
    });
  } catch (err) {
    Snackbar.show({text: 'Failed to upload image'});
  }
}

type ManageAccountInfoProps = NativeStackScreenProps<
  MyAccountStackParams,
  'ManageAccountInfo'
>;

export function ManageAccountInfo(props: ManageAccountInfoProps) {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.ManageAccountInfo.queryRef) {
    return <></>;
  }

  return <ManageAccountInfoWithData {...props} />;
}

function ManageAccountInfoWithData({
  navigation,
}: ManageAccountInfoProps): JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery(
    ManageAccountInfoQuery,
    preloadedQueries!.ManageAccountInfo.queryRef!,
  );
  const myAccount = data.viewer;
  const myUserType = myAccount?.userType;
  const myFirebaseAccount = auth().currentUser;

  const [commitRegularMutation, isRegularPending] =
    useMutation<ManageAccountInfoRegularMutationType>(
      ManageAccountInfoRegularMutation,
    );
  const [commitCriticMutation, isCriticPending] =
    useMutation<ManageAccountInfoCriticMutationType>(
      ManageAccountInfoCriticMutation,
    );

  const [isPending, setIsPending] = useState(false);
  useEffect(
    () => setIsPending(isRegularPending || isCriticPending),
    [isRegularPending, isCriticPending],
  );

  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [gender, setGender] = useState<Gender | null>(null);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [avatarUri, setAvatarUri] = useState('');

  useEffect(() => {
    if (!myAccount) {
      return;
    }
    setName(myAccount.name);
    setUsername(myAccount.username);
    setDateOfBirth(new Date(myAccount.dateOfBirth));
    setGender(myAccount.gender);
    setWebsite(myAccount.blogUrl ?? '');
    setEmail(myFirebaseAccount?.email ?? '');
  }, [myAccount, myFirebaseAccount]);

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
        setAvatarUri(uriResult ? uriResult : '');
      }
    });
  };

  function returnToMyAccountScreen() {
    preloadedQueries?.MyAccount.loadQuery({});
    navigation.navigate('MyAccount');
  }

  const onSave = async () => {
    if (!myAccount || !myFirebaseAccount) {
      return;
    }

    setIsPending(true);

    await myFirebaseAccount.updateEmail(email);
    await myFirebaseAccount.updateProfile({displayName: name});
    if (password.length > 0) {
      await myFirebaseAccount?.updatePassword(password);
    }

    let newAvatarUrl;
    if (avatarUri !== '') {
      await uploadProfileImage(data.userProfileImageUploadUrl, avatarUri);
      newAvatarUrl =
        BASE_AVATAR_URL + myFirebaseAccount.uid + `?date=${new Date()}`;
    }

    if (myUserType === 'Critic') {
      commitCriticMutation({
        variables: {
          input: {
            avatarUrl: newAvatarUrl,
            username,
            dateOfBirth,
            gender,
            blogUrl: website,
          },
        },
        updater: store => {
          store.invalidateStore();
        },
        onCompleted: resp => {
          const errorMessage = resp.updateCriticUser.message;
          if (errorMessage) {
            return Snackbar.show({text: errorMessage});
          }
          Snackbar.show({text: 'Successfully updated your account'});
          setIsPending(false);
          returnToMyAccountScreen();
        },
      });
    } else if (myUserType === 'Regular') {
      commitRegularMutation({
        variables: {
          input: {
            avatarUrl: newAvatarUrl,
            username,
            dateOfBirth: dateToIsoDateStr(dateOfBirth),
            gender,
          },
        },
        updater: store => {
          store.invalidateStore();
        },
        onCompleted: resp => {
          const errorMessage = resp.updateRegularUser.message;
          if (errorMessage) {
            return Snackbar.show({text: errorMessage});
          }
          Snackbar.show({text: 'Successfully updated your account'});
          setIsPending(false);
          returnToMyAccountScreen();
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ManageAccountProfilePictureDisplay
          nameValue={name}
          onSelectedName={(item: string) => setName(item)}
          imageUri={avatarUri}
          onSelectedImage={onPressImage}
        />
        <ManageAccountInformationDisplay
          gender={gender}
          onSelectedGender={(item: Gender | null) => setGender(item)}
          birthdayValue={dateOfBirth}
          onSelectedDate={(date: Date) => setDateOfBirth(date)}
          usernameValue={username}
          onSelectedUsername={(item: string) => setUsername(item)}
          emailValue={email}
          onSelectedEmail={(item: string) => setEmail(item)}
        />
        <ManageAccountPasswordDisplay
          passwordValue={password}
          onSelectedPassword={(item: string) => setPassword(item)}
          rePasswordValue={rePassword}
          onSelectedRePassword={(item: string) => setRePassword(item)}
        />
        <Button onPress={onSave}>
          {isPending ? <ButtonLoadingIcon /> : 'Save'}
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    gap: 16,
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
});
