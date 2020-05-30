import styled from 'styled-components/native';
import Text from '../text';

const SceneError = styled(Text)`
  margin-bottom: 80px;
`;

SceneError.defaultProps = {
  size: 12,
  color: 'red',
};

export default SceneError;
