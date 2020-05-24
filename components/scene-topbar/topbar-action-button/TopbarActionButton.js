import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Button from '../../button';
import UserImage from '../../user-image';

const TopbarActionButtonContainer = styled(Button)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  ${({left}) => (left ? 'left' : 'right')}: 0px;
  position: absolute;
`;

const TopbarActionButton = ({icon, image, ...others}) => (
  // eslint-disable-next-line
  <TopbarActionButtonContainer {...others}>
    {icon && <FontAwesomeIcon icon={icon} color="#95a5a6" size={30} />}
    {!icon && <UserImage source={{uri: image}} />}
  </TopbarActionButtonContainer>
);

TopbarActionButton.defaultProps = {
  icon: undefined,
  image: undefined,
};

TopbarActionButton.propTypes = {
  icon: PropTypes.object, // eslint-disable-line
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default TopbarActionButton;
