import React, {useCallback, useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {CreateReviewInfoDisplay} from './components/CreateReviewInfoDisplay';
import {Button, Input} from '@rneui/themed';
import colors from '../../styles/colors';
import {ConfirmDialog} from '../../dialogs/ConfirmDialog';
import {ActionCb} from '../../types/ActionCb';

export function EditReviewScreen(): JSX.Element {
  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [content, setContent] = useState('');

  const onRating = (rating: number) => {
    console.log(rating);
  };
  const onSaveReview = () => {
    console.log('Call API Save');
  };
  const onDeleteReview = () => {
    console.log('Call API Delete');
  };

  const customOpenButton = useCallback((onPress: ActionCb) => {
    const buttonWidth = (Dimensions.get('window').width - 40) / 2 - 2;
    return (
      <Button
        title={'Delete'}
        containerStyle={[styles.deleteButton, {width: buttonWidth}]}
        buttonStyle={{backgroundColor: colors.mediumBlack}}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        inputStyle={{
          height: 100,
        }}
        multiline
        renderErrorMessage={false}
      />

      <View style={styles.buttonContainer}>
        <ConfirmDialog
          onOk={onDeleteReview}
          openBtnTitle={'Delete'}
          title={'Warning!'}
          message={'Do you want to delete this review?'}
          customOpenButton={onPress => customOpenButton(onPress)}
        />

        <Button
          containerStyle={[styles.saveButton]}
          onPress={onSaveReview}
          title="Save"
        />
      </View>
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
  deleteButton: {
    backgroundColor: colors.mediumBlack,
    borderRadius: 8,
  },
  saveButton: {
    borderRadius: 8,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    justifyContent: 'space-between',
  },
});
