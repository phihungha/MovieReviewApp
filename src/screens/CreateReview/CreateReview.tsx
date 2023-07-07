import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {TitleText} from '../../components/Text/TitleText';
import {CreateReviewInfoDisplay} from './components/CreateReviewInfoDisplay';
import {Button, Input} from '@rneui/themed';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}
export function CreateReviewScreen({}: {navigation: any}): JSX.Element {
  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [content, setContent] = useState('');

  const onRating = (rating: number) => {
    console.log(rating);
  };
  const onPressButton = () => {
    console.log('Call API');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TitleText>Create review for</TitleText>
      </View>

      <CreateReviewInfoDisplay
        movieName={'name'}
        movieYear={2022}
        criticScore={8.0}
        userScore={9.0}
        genres={'Thriller'}
        onRating={onRating}
      />

      <Input
        value={title}
        onChangeText={i => setTitle(i)}
        placeholder="Enter a title..."
        label={'Title'}
        renderErrorMessage={false}
      />

      <Input
        value={externalUrl}
        onChangeText={i => setExternalUrl(i)}
        placeholder="Enter a external url..."
        label={'External URL'}
        renderErrorMessage={false}
      />

      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Enter content..."
        label={'Content'}
        renderErrorMessage={false}
      />
      <Button onPress={onPressButton} title="Post" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
});
