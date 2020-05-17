import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-device-detection';

const statusBarHeight = Platform.OS === 'android' ? 0 : isIphoneX ? 30 : 20; // eslint-disable-line

const windowDimensions = {
  getWidth: () => Dimensions.get('window').width,
  getHeight: () => Dimensions.get('window').height,
  getStatusBarHeight: () => statusBarHeight,
  getTopbarHeight: () => statusBarHeight + 60,
};

export default windowDimensions;
