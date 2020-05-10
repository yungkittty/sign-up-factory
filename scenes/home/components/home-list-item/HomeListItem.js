import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from '../../../../components/button';
import Text from '../../../../components/text';

const ItemContainer = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  margin-bottom: 20px;
  background-color: gray;
`;

const ItemImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
`;

const InfoContainer = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 15px;
`;

const InfoTitle = styled(Text).attrs(() => ({
  size: 18,
  weight: 700,
  color: 'white',
  numberOfLines: 1,
  ellipsizeMode: 'middle',
}))`
  max-width: 48%;
  margin-right: 5px;
`;

const InfoSubtitle = styled(InfoTitle)`
  margin-right: 0px;
`;

const HomeListItem = ({item}) => {
  const {
    // eslint-disable-line
    id: userId,
    firstName: userFirstName,
    lastName: userLastName,
    avatarData: userAvatarData = '',
  } = item;
  return (
    <ItemContainer to={`/users/${userId}`} size={70} centered>
      <ItemImage source={userAvatarData} />
      <InfoContainer>
        <InfoTitle>
          {/* eslint-disable-line */}
          {userFirstName}
        </InfoTitle>
        <InfoSubtitle>
          {/* eslint-disable-line */}
          {userLastName}
        </InfoSubtitle>
      </InfoContainer>
    </ItemContainer>
  );
};

HomeListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatarData: PropTypes.string,
  }).isRequired,
};

export default HomeListItem;
