import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Image, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

const sizes = {
  large: 180,
  default: 40,
};

const UserImage = styled(({source: {uri}, size, ...others}) =>
  uri ? (
    <Image
      // eslint-disable-next-line
      {...others}
      source={{uri}}
    />
  ) : (
    <View>
      <FontAwesomeIcon
        // eslint-disable-next-line
        {...others}
        size={size === 'large' ? sizes.large : sizes.default}
        color="#BDBDBD"
        icon={faUserCircle}
      />
    </View>
  ),
)`
  ${({size}) =>
    size === 'large'
      ? `
        width: ${sizes.large}px;
        height: ${sizes.large}px;
        border-radius: ${sizes.large / 2}px;
        `
      : `
        width: ${sizes.default}px;
        height: ${sizes.default}px;
        border-radius: ${sizes.default / 2}px;
      `}}
`;

UserImage.defaultProps = {
  src: undefined,
  size: undefined,
};

UserImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
};

export default UserImage;
