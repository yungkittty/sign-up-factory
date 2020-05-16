import styled from 'styled-components/native';

const SceneContainer = styled.ScrollView.attrs(() => ({contentContainerStyle: {padding: 40}}))`
  display: flex;
  flex-direction: column;
  ${({withTopbar}) => withTopbar && 'margin-top: 60px'};
`;

export default SceneContainer;
