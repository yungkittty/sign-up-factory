import styled from 'styled-components/native';
import {windowDimensions} from '../../configurations/window';

const SceneContainer = styled.ScrollView.attrs(() => ({contentContainerStyle: {padding: 40}}))`
  display: flex;
  flex-direction: column;
  ${({withTopbar}) => withTopbar && `margin-top: ${windowDimensions.getTopbarHeight()}px`};
`;

export default SceneContainer;
