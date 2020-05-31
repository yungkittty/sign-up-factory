import {Platform} from 'react-native';
import {launchCameraAsync, launchImageLibraryAsync, MediaTypeOptions} from 'expo-image-picker';

const options = {
  mediaTypes: MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
  quality: 1,
};

const importPhotoPress = async (isCamera, onSelect) => {
  try {
    const result = isCamera
      ? await launchCameraAsync(options)
      : await launchImageLibraryAsync(options);
    if (!result.cancelled && !result.error && !result.customButton) {
      const uri = Platform.OS === 'android' ? result.uri : result.uri.replace('file://', '');
      const type = uri.substr(uri.lastIndexOf('.') + 1);
      onSelect(uri, {
        uri,
        type: `image/${type}`,
        name: `image.${type}`,
      });
    }
    // eslint-disable-next-line
  } catch (e) {}
};

export default importPhotoPress;
