import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Text from '../text';

const SceneSubtitle = styled(Text)`
  ${(props) => {
    const {errored} = props;
    return `
      margin-bottom: ${errored ? 15 : 80}px;
    `;
  }}
`;

SceneSubtitle.defaultProps = {
  size: 14,
  errored: true,
};

SceneSubtitle.propTypes = {
  errored: PropTypes.bool,
};

export default SceneSubtitle;
