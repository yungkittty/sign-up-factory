import React from 'react';
import styled from 'styled-components/native';
import Text from '../../components/text';
import Input from '../../components/input';

const SignUpContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const SignUpTitle = styled(Text)`
  margin-bottom: 10px;
`;

const SignUpSubtitle = styled(Text)`
  margin-bottom: 80px;
`;

const SignUpInput = styled(Input)`
  width: 100%;
  margin-bottom: 20px;
`;

const SignUp = () => (
  <SignUpContainer>
    <SignUpTitle size={36} weight={700}>
      {/* eslint-disable-line */}
      Sign-Up
    </SignUpTitle>
    <SignUpSubtitle size={14}>
      {/* eslint-disable-line */}
      Sign-up for our application by filling these fields!
    </SignUpSubtitle>
    <SignUpInput placeholder="First Name" />
    <SignUpInput placeholder="Last Name" />
    <SignUpInput placeholder="Email" keyboardType="email-address" />
    <SignUpInput placeholder="Password" secureTextEntry />
    <SignUpInput placeholder="Confirm Password" secureTextEntry />
  </SignUpContainer>
);

export default SignUp;
