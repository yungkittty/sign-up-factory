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

const SignUpInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

const SignUpButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: grey;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userFirstName, setUserFirstName] = React.useState('');
  const [userLastName, setUserLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userConfirmPassword, setUserConfirmPassword] = React.useState('');
  const [userError, setUserError] = React.useState('');

  const onButtonPress = async () => {
    if (userFirstName === '') {
      setUserError("First name shouldn't be empty!");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(userFirstName)) {
      setUserError('First name should only contain letters!');
      return;
    }

    if (userLastName === '') {
      setUserError("Last name shouldn't be empty!");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(userLastName)) {
      setUserError('Last name should only contain letters!');
      return;
    }

    if (username === '') {
      setUserError("Username shouldn't be empty!");
      return;
    }

    if (!/^[a-zA-Z]+$/.test(username)) {
      setUserError('Username should only contain letters!');
      return;
    }

    if (userPassword === '') {
      setUserError("Password shouldn't be empty!");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(userPassword)) {
      setUserError('Password should only contain letters and numbers!');
      return;
    }

    if (userConfirmPassword === '') {
      setUserError("Confirm password shouldn't be empty!");
      return;
    }

    if (userPassword !== userConfirmPassword) {
      setUserError('Passwords should match!');
      return;
    }

    setUserError('');

    try {
      const apiSignUpResponse = await currentUserApi.signUp({
        firstName: userFirstName,
        lastName: userLastName,
        username,
        password: userPassword,
      });
      if (apiSignUpResponse.status !== 200) {
        setUserError('Username is already taken!');
        return;
      }
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
        Sign Up
      </SceneTitle>
      <SceneSubtitle>
        {/* eslint-disable-line */}
        Sign up for our application by filling these fields!
      </SceneSubtitle>
      <SceneError>
        {/* eslint-disable-line */}
        {userError}
      </SceneError>
      <SignUpInput
        // eslint-disable-line
        placeholder="First Name (Only letters!)"
        value={userFirstName}
        onChangeText={setUserFirstName}
      />
      <SignUpInput
        // eslint-disable-line
        placeholder="Last Name (Only letters!)"
        value={userLastName}
        onChangeText={setUserLastName}
      />
      <SignUpInput
        // eslint-disable-line
        placeholder="Username (Only letters!)"
        value={username}
        onChangeText={setUsername}
      />
      <SignUpInput
        placeholder="Password (Only letters and numbers!)"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />
      <SignUpInput
        placeholder="Confirm Password (Only letters and numbers!)"
        value={userConfirmPassword}
        onChangeText={setUserConfirmPassword}
        secureTextEntry
      />
      <SignUpButton size={70} onPress={onButtonPress} centered>
        <Text size={18} weight={700} color="white">
          {/* eslint-disable-line */}
          Sign up now!
        </Text>
      </SignUpButton>
      <Button to="/sign-in" centered>
        <Text size={16} color="grey" underlined>
          {/* eslint-disable-next-line */}
          Already have an account?
        </Text>
      </Button>
    </SceneContainer>
  );
};

export default SignUp;
