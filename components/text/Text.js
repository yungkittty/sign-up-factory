import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Text = styled.Text`
  ${(props) => {
    const {size, weight} = props;
    return `
      font-family: open-sans;
      font-size: ${size}px;
      font-weight: ${weight};    
    `;
  }}
`;

Text.defaultProps = {
  size: 12,
  weight: 400,
};

Text.propTypes = {
  size: PropTypes.oneOf([
    // eslint-disable-line
    12,
    14,
    16,
    18,
    24,
    36,
    48,
  ]),
  weight: PropTypes.oneOf([
    // eslint-disable-line
    400,
    700,
  ]),
};

export default Text;
