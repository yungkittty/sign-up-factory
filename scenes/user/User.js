import React, {useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
// import PropTypes from "prop-types";
import SceneContainer from '../../components/scene-container';
import SceneTitle from '../../components/scene-title';
import SceneSubtitle from '../../components/scene-subtitle';
import useUser from '../../hooks/use-user';
import useCurrentUser from '../../hooks/use-current-user';
import Input from '../../components/input';
import Button from '../../components/button';
import Text from '../../components/text';
import UserImage from '../../components/user-image';

const ImportPhotoButton = styled(Button)`
  width: 100%;
  margin-bottom: 50px;
  background-color: #03a9f4;
`;

const SaveButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${({disabled}) => (disabled ? '#ddd' : '#4CAF50')};
`;

const DisconnectButton = styled(Button)`
  width: 100%;
  margin-top: 30px;
  background-color: #f44336;
`;

const User = () => {
  const params = useParams();
  const user = useUser(params.id);
  const {id: currentUserId} = useCurrentUser();
  const isCurrentUser = user.id === currentUserId;

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const isPropsHaveChanges = firstName !== user.firstName || lastName !== user.lastName;

  return (
    <SceneContainer>
      <SceneTitle>{`${user.firstName} ${user.lastName}`}</SceneTitle>
      <SceneSubtitle>{user.username}</SceneSubtitle>
      <UserImage
        size="large"
        source={{uri: user.avatarData}}
        style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}
      />
      {isCurrentUser && (
        <>
          <ImportPhotoButton onPress={() => console.log('patch')} centered>
            <FontAwesomeIcon
              icon={faCamera}
              color="white"
              style={{position: 'absolute', left: 30}}
              size={20}
            />
            <Text size={18} weight={700} color="white">
              Choose a picture
            </Text>
          </ImportPhotoButton>
          <Input placeholder="First name" value={firstName} onChangeText={setFirstName} />
          <Input
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            style={{marginTop: 10}}
          />
          <SaveButton onPress={() => console.log('patch')} disabled={!isPropsHaveChanges} centered>
            <Text size={18} weight={700} color="white">
              Save
            </Text>
          </SaveButton>
          <DisconnectButton onPress={() => console.log('disconnect')} centered>
            <Text size={18} weight={700} color="white">
              Disconnect
            </Text>
          </DisconnectButton>
        </>
      )}
    </SceneContainer>
  );
};

// User.propTypes = {};

export default User;
