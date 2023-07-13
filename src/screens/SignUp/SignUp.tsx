import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import validator from 'validator';
import {Button, Input} from '@rneui/themed';
import {TitleBlock} from '../../components/Display/TitleBlock';
import {TextLink} from '../../components/Text/TextLink';
import colors from '../../styles/colors';
import {ChooseTypeBottomSheet} from './dialogs/ChooseTypeBottomSheet';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigators/RootStackNavigator';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {graphql} from 'relay-runtime';
import {useMutation} from 'react-relay';
import type {SignUpRegularMutation as SignUpRegularMutationType} from './__generated__/SignUpRegularMutation.graphql';
import type {SignUpCriticMutation as SignUpCriticMutationType} from './__generated__/SignUpCriticMutation.graphql';
import {ButtonLoadingIcon} from '../../components/Display/ButtonLoadingIcon';
import Snackbar from 'react-native-snackbar';

async function firebaseSignUp(
  name: string,
  email: string,
  password: string,
): Promise<FirebaseAuthTypes.User> {
  let result: FirebaseAuthTypes.UserCredential;
  try {
    result = await auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    if ((err as any)?.code === 'auth/email-already-in-use') {
      result = await auth().signInWithEmailAndPassword(email, password);
    } else {
      throw err;
    }
  }
  await result.user.updateProfile({displayName: name});
  return result.user;
}

const SignUpRegularMutation = graphql`
  mutation SignUpRegularMutation($input: RegularSignUpInput!) {
    regularSignUp(input: $input) {
      ... on MutationRegularSignUpSuccess {
        data {
          id
        }
      }
      ... on AlreadyExistsError {
        message
      }
      ... on ValidationError {
        message
      }
    }
  }
`;

const SignUpCriticMutation = graphql`
  mutation SignUpCriticMutation($input: CriticSignUpInput!) {
    criticSignUp(input: $input) {
      ... on MutationCriticSignUpSuccess {
        data {
          id
        }
      }
      ... on AlreadyExistsError {
        message
      }
      ... on ValidationError {
        message
      }
    }
  }
`;

type SignUpScreenProps = NativeStackScreenProps<RootStackParams, 'SignUp'>;

export function SignUpScreen({navigation}: SignUpScreenProps): JSX.Element {
  const [commitRegularMutation, isRegularPending] =
    useMutation<SignUpRegularMutationType>(SignUpRegularMutation);
  const [commitCriticMutation, isCriticPending] =
    useMutation<SignUpCriticMutationType>(SignUpCriticMutation);

  const [isPending, setIsPending] = useState(false);
  useEffect(
    () => setIsPending(isRegularPending || isCriticPending),
    [isRegularPending, isCriticPending],
  );

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('Regular');
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [displayError, setDisplayError] = useState(false);

  async function onSignUp() {
    if (
      !validator.isEmail ||
      username.length < 1 ||
      name.length < 1 ||
      password.length < 1 ||
      password !== rePassword ||
      (userType === 'Critic' && !validator.isURL(website))
    ) {
      return setDisplayError(true);
    }

    setIsPending(true);

    await firebaseSignUp(name, email, password);

    if (userType === 'Critic') {
      commitCriticMutation({
        variables: {
          input: {
            username,
            blogUrl: website,
          },
        },
        onCompleted: resp => {
          const errorMessage = resp.criticSignUp.message;
          if (errorMessage) {
            Snackbar.show({text: errorMessage});
          } else {
            Snackbar.show({text: 'Signed up successfully!'});
            navigation.navigate('Login');
          }
        },
      });
    } else if (userType === 'Regular') {
      commitRegularMutation({
        variables: {
          input: {username},
        },
        onCompleted: resp => {
          const errorMessage = resp.regularSignUp.message;
          if (errorMessage) {
            Snackbar.show({text: errorMessage});
          } else {
            Snackbar.show({text: 'Signed up successfully!'});
            navigation.navigate('Login');
          }
        },
      });
    }

    await auth().signOut();
    setIsPending(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <TitleBlock>SIGN UP</TitleBlock>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            errorMessage={
              displayError && !validator.isEmail(email) ? 'Invalid email' : ''
            }
            placeholder="Enter your email..."
          />
          <Input
            label="Username"
            value={username}
            onChangeText={setUsername}
            errorMessage={
              displayError && username.length < 1
                ? 'Username cannot be empty'
                : ''
            }
            placeholder="Enter your username..."
          />
          <Input
            label="Full name"
            value={name}
            onChangeText={setName}
            errorMessage={
              displayError && name.length < 1 ? 'Name cannot be empty' : ''
            }
            placeholder="Enter your full name..."
          />
          <Input
            label="User type"
            value={userType}
            disabled
            placeholder="Choose user type..."
            rightIcon={
              <ChooseTypeBottomSheet
                onSelectedType={i => setUserType(i.title)}
                iconColor={colors.white}
                iconSize={24}
              />
            }
          />
          {userType === 'Critic' && (
            <Input
              label="Website"
              value={website}
              onChangeText={i => setWebsite(i)}
              errorMessage={
                displayError && !validator.isURL(website)
                  ? 'Invalid website URL'
                  : ''
              }
              placeholder="Enter your website..."
            />
          )}
          <Input
            label="Password"
            secureTextEntry={true}
            value={password}
            errorMessage={
              displayError && password.length < 1
                ? 'Password cannot be empty'
                : ''
            }
            placeholder="Enter password..."
            onChangeText={setPassword}
          />
          <Input
            label="Re-enter password"
            secureTextEntry={true}
            value={rePassword}
            errorMessage={
              password !== '' && password !== rePassword
                ? 'Password does not match'
                : ''
            }
            placeholder="Re enter your password..."
            onChangeText={setRePassword}
          />
        </View>

        <View style={styles.bottomSection}>
          <Button onPress={onSignUp}>
            {isPending ? <ButtonLoadingIcon /> : 'SIGN UP'}
          </Button>
          <TextLink
            text="Already have an account, "
            textLink="login"
            onClicked={() => navigation.navigate('Login')}
            isUnderline={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
  },
  scrollView: {
    height: '100%',
  },
  scrollViewContent: {
    paddingVertical: 30,
  },
  inputContainer: {
    gap: 3,
  },
  bottomSection: {
    paddingHorizontal: 10,
    gap: 20,
  },
  iconStyle: {
    color: colors.white,
    fontSize: 25,
  },
});
