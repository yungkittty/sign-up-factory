import styled from 'styled-components/native';
import Text from '../text';

const SceneTitle = styled(Text)`
  margin-bottom: 10px;
`;

SceneTitle.defaultProps = {
  size: 36,
  weight: 700,
};

export default SceneTitle;
