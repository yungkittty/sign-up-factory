import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Text = styled.Text`
  ${(props) => {
    const {size, weight, color, underlined} = props;
    return `
      font-family: open-sans;
      font-size: ${size}px;
      font-weight: ${weight};
      color: ${color};
      ${underlined ? 'text-decoration-line: underline;' : ''}
    `;
  }}
`;

Text.defaultProps = {
  size: 12,
  weight: 400,
  color: 'black',
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
  color: PropTypes.string,
  underlined: PropTypes.bool,
};

export default Text;
