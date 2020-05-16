import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select image',
  takePhotoButtonTitle: 'Take a picture',
  chooseFromLibraryButtonTitle: 'Choose from library',
  cancelButtonTitle: 'Cancel',
  mediaType: 'photo',
  maxWidth: 1024,
  maxHeight: 1024,
  quality: 1,
  allowsEditing: true,
  permissionDenied: {
    title: 'Permission denied',
    text: 'Ask camera',
    reTryTitle: 'Authorize',
    okTitle: 'Cancel',
  },
};

const importPhotoPress = (onSelect) =>
  ImagePicker.showImagePicker(options, (response) => {
    if (!response.didCancel && !response.error && !response.customButton) {
      const uri = Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '');
      const type =
        Platform.OS === 'android'
          ? response.path.substr(response.path.lastIndexOf('.') + 1)
          : uri.substr(uri.lastIndexOf('.') + 1);
      onSelect(uri, {
        uri,
        type: `image/${type}`,
        name: `image.${type}`,
      });
    }
  });

export default importPhotoPress;
