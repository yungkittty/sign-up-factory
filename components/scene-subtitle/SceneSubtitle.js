import styled from 'styled-components/native';
import Text from '../text';

const SceneSubtitle = styled(Text)`
  margin-bottom: 15px;
`;

SceneSubtitle.defaultProps = {
  size: 14,
};

export default SceneSubtitle;
