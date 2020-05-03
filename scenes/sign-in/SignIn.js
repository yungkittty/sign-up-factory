import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-native';
import styled from 'styled-components/native';
import SceneContainer from '../../components/scene-container';
import SceneTitle from '../../components/scene-title';
import SceneSubtitle from '../../components/scene-subtitle';
import SceneError from '../../components/scene-error';
import Text from '../../components/text';
import Input from '../../components/input';
import Button from '../../components/button';
import {currentUserApi, currentUserActions} from '../../datas/current-user';

const SignInInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: grey;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userError, setUserError] = React.useState('');

  const onButtonPress = async () => {
    if (username === '') {
      setUserError("Username shouldn't be empty!");
      return;
    }

    if (userPassword === '') {
      setUserError("Password shouldn't be empty!");
      return;
    }

    setUserError('');

    try {
      const apiSignInResponse = await currentUserApi.signIn({
        username,
        password: userPassword,
      });
      if (apiSignInResponse.status !== 200) {
        setUserError('Something went wrong! Please, retry!');
        return;
      }
      const {_id: id} = await apiSignInResponse.json();
      dispatch(currentUserActions.signIn({id}));
      history.push('/');
      // eslint-disable-next-line
    } catch (error) {
      setUserError('Something went wrong! Please, retry!');
    }
  };

  return (
    <SceneContainer>
      <SceneTitle>
        {/* eslint-disable-line */}
        Sign In
      </SceneTitle>
      <SceneSubtitle>
        {/* eslint-disable-line */}
        Sign in for our application by filling these fields!
      </SceneSubtitle>
      <SceneError>
        {/* eslint-disable-line */}
        {userError}
      </SceneError>
      <SignInInput
        // eslint-disable-line
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <SignInInput
        placeholder="Password"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />
      <SignInButton size={70} onPress={onButtonPress} centered>
        <Text size={18} weight={700} color="white">
          {/* eslint-disable-line */}
          Sign in now!
        </Text>
      </SignInButton>
      <Button to="/sign-up" centered>
        <Text size={16} color="grey" underlined>
          {/* eslint-disable-next-line */}
          Don't have an account?
        </Text>
      </Button>
    </SceneContainer>
  );
};

export default SignIn;
