import _ from 'lodash';
import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faArrowLeft, faImage} from '@fortawesome/free-solid-svg-icons';
import importPhotoPress from './utils/import-photo-press';
import SceneTopbar from '../../components/scene-topbar';
import SceneContainer from '../../components/scene-container';
import SceneTitle from '../../components/scene-title';
import SceneSubtitle from '../../components/scene-subtitle';
import useUser from '../../hooks/use-user';
import useCurrentUser from '../../hooks/use-current-user';
import Input from '../../components/input';
import Button from '../../components/button';
import Text from '../../components/text';
import UserImage from '../../components/user-image';
import {usersActions} from '../../datas/users';
import {currentUserApi} from '../../datas/current-user';

const ImportPhotoButton = styled(Button)`
  width: 100%;
  margin-bottom: 50px;
  flex-flow: row;
`;

const SubImportPhotoButton = styled(Button)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SaveButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${({disabled}) => (disabled ? '#ddd' : '#4CAF50')};
`;

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const user = useUser(params.id);
  const {id: currentUserId} = useCurrentUser();
  const isCurrentUser = user.id === currentUserId;

  const [avatarData, setAvatarData] = useState({uri: user.avatarData, file: undefined});
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const [isAvatarButtonSelected, setIsAvatarButtonSelected] = useState(false);

  const initialSaveMessage = 'Save';

  const [saveMessage, setSaveMessage] = useState(initialSaveMessage);

  const isPropsHaveChanges =
    (avatarData.uri !== user.avatarData ||
      firstName !== user.firstName ||
      lastName !== user.lastName) &&
    saveMessage === initialSaveMessage;

  const importPhoto = useCallback((isCamera) => {
    importPhotoPress(isCamera, (uri, file) => {
      setIsAvatarButtonSelected(false);
      setAvatarData({uri, file});
    });
  }, []);

  const patchUser = useCallback(async () => {
    try {
      setSaveMessage('...');
      const patchOptions = {
        userId: currentUserId,
        ...(firstName !== user.firstName && {firstName}),
        ...(lastName !== user.lastName && {lastName}),
      };
      if (_.size(patchOptions) > 0) await currentUserApi.patch(patchOptions);
      if (avatarData.file) {
        await currentUserApi.uploadAvatar({avatarData});
      }
      dispatch(
        usersActions.getUser({
          ...patchOptions,
          ...(avatarData.file && {avatarData: avatarData.uri}),
        }),
      );
      setSaveMessage('Updated');
    } catch (error) {
      setAvatarData({uri: user.avatarData, file: undefined});
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setSaveMessage('Error');
    }
    setTimeout(() => setSaveMessage(initialSaveMessage), 2000);
  }, [
    dispatch,
    currentUserId,
    user.avatarData,
    user.firstName,
    user.lastName,
    avatarData,
    firstName,
    lastName,
  ]);

  return (
    <>
      <SceneTopbar actions={{left: {icon: faArrowLeft, onPress: () => history.push('/')}}} />
      <SceneContainer withTopbar>
        <SceneTitle>{`${user.firstName} ${user.lastName}`}</SceneTitle>
        <SceneSubtitle>{user.username}</SceneSubtitle>
        <UserImage
          size="large"
          source={{uri: avatarData.uri}}
          style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}
        />
        {isCurrentUser && (
          <>
            <ImportPhotoButton
              style={{backgroundColor: isAvatarButtonSelected ? 'transparent' : '#03a9f4'}}
              onPress={() => setIsAvatarButtonSelected(!isAvatarButtonSelected)}
              centered>
              {!isAvatarButtonSelected ? (
                <>
                  <FontAwesomeIcon
                    icon={faCamera}
                    color="white"
                    style={{position: 'absolute', left: 30}}
                    size={20}
                  />
                  <Text size={18} weight={700} color="white">
                    Choose a picture
                  </Text>
                </>
              ) : (
                <>
                  <SubImportPhotoButton
                    onPress={() => importPhoto(true)}
                    style={{
                      backgroundColor: '#95a5a6',
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}>
                    <FontAwesomeIcon icon={faCamera} color="white" size={20} />
                    <Text size={14} weight={700} color="white">
                      From camera
                    </Text>
                  </SubImportPhotoButton>
                  <SubImportPhotoButton
                    onPress={() => importPhoto(false)}
                    style={{
                      backgroundColor: '#34495e',
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}>
                    <FontAwesomeIcon icon={faImage} color="white" size={20} />
                    <Text size={14} weight={700} color="white">
                      From gallery
                    </Text>
                  </SubImportPhotoButton>
                </>
              )}
            </ImportPhotoButton>
            <Input placeholder="First name" value={firstName} onChangeText={setFirstName} />
            <Input
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
              style={{marginTop: 10}}
            />
            <SaveButton onPress={patchUser} disabled={!isPropsHaveChanges} centered>
              <Text size={18} weight={700} color="white">
                {saveMessage}
              </Text>
            </SaveButton>
          </>
        )}
      </SceneContainer>
    </>
  );
};

export default User;
