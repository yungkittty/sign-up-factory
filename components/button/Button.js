import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import styled from 'styled-components/native';

const Button = styled(({to, ...others}) =>
  to ? (
    <Link
      // eslint-disable-next-line
      {...others}
      to={to}
      component={TouchableOpacity}
    />
  ) : (
    <TouchableOpacity
      // eslint-disable-next-line
      {...others}
    />
  ),
)`
  ${(props) => {
    const {size, centered} = props;

    const buttonCenteredStyle = `
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    return `
      ${centered ? buttonCenteredStyle : ''}
      height: ${size}px;
    `;
  }}
  border-radius: 6px;
`;

Button.defaultProps = {
  to: undefined,
  size: 50,
  centered: false,
};

Button.propTypes = {
  to: PropTypes.string,
  size: PropTypes.oneOf([
    // eslint-disable-line
    40,
    50,
    70,
  ]),
  centered: PropTypes.bool,
};

export default Button;
