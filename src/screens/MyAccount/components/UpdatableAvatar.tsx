import React from 'react';
import {StandardAvatar} from '../../../components/Display/StandardAvatar';
import {graphql} from 'relay-runtime';
import {UpdatableAvatar$key} from './__generated__/UpdatableAvatar.graphql';
import {useFragment} from 'react-relay';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

const UpdatableAvatarFragment = graphql`
  fragment UpdatableAvatar on User {
    id
    avatarUrl
  }
`;

async function uploadImage(imageUri: string) {
  const body = new FormData();
  body.append('photo', {uri: imageUri});
  body.append('Content-Type', 'image/png');

  await fetch('<s3 uri here>', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body,
  });
}

export interface UpdatableAvatarProps {
  user: UpdatableAvatar$key | null;
}

export function UpdatableAvatar({
  user,
}: UpdatableAvatarProps): React.JSX.Element {
  const data = useFragment(UpdatableAvatarFragment, user);

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };

  const onPressImage = async () => {
    await launchImageLibrary(options, response => {
      const uriResult = response.assets?.at(0)?.uri;
      if (uriResult) {
        uploadImage(uriResult);
      }
    });
  };

  return (
    <StandardAvatar size={150} uri={data?.avatarUrl} onPress={onPressImage} />
  );
}
