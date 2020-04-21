import React from 'react';
import styled from 'styled-components/native';
import Text from '../../components/text';
import Input from '../../components/input';

const SignInContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const SignInTitle = styled(Text)`
  margin-bottom: 10px;
`;

const SignInSubtitle = styled(Text)`
  margin-bottom: 80px;
`;

const SignInInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

const SignIn = () => (
  <SignInContainer>
    <SignInTitle size={36} weight={700}>
      {/* eslint-disable-line */}
      Sign-In
    </SignInTitle>
    <SignInSubtitle size={14}>
      {/* eslint-disable-line */}
      Sign-in in our application by filling these fields!
    </SignInSubtitle>
    <SignInInput placeholder="Email" keyboardType="email-address" />
    <SignInInput placeholder="Password" secureTextEntry />
  </SignInContainer>
);

export default SignIn;
