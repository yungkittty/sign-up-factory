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

  const [isLoading, setIsLoading] = React.useState(false);
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
    setIsLoading(true);

    try {
      await currentUserApi.signUp({
        firstName: userFirstName,
        lastName: userLastName,
        username,
        password: userPassword,
      });
      const response = await currentUserApi.signIn({
        username,
        password: userPassword,
      });
      const {_id: id} = response.data;
      dispatch(currentUserActions.signIn({id}));
      history.push('/');
    } catch (error) {
      const errorMessage = (((error || {}).response || {}).data || {}).message || '';
      if (errorMessage) {
        setUserError(errorMessage);
      } else {
        setUserError('Something went wrong! Please, retry!');
      }
    }

    setIsLoading(false);
  };

  return (
    <SceneContainer style={{marginTop: 20}}>
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
      <SignUpButton size={70} onPress={onButtonPress} disabled={isLoading} centered>
        <Text size={18} weight={700} color="white">
          {/* eslint-disable-line */}
          {!isLoading ? 'Sign up now!' : '...'}
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
