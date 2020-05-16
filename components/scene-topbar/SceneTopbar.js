import React from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import TopbarActionButton from './topbar-action-button/TopbarActionButton';

const SceneTopbarContainer = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  background: #ecf0f1;
  ${Platform.OS === 'android'
    ? `
      elevation: 8;
    `
    : `
  shadow-offset: 0px 4.8px;
  shadow-radius: 4.32px;
  shadow-color: rgba(0, 0, 0, 1);
  shadow-opacity: 0.192;
`}
`;

const SceneTopbar = ({actions}) => {
  return (
    <SceneTopbarContainer>
      {/* eslint-disable-next-line */}
      {actions.left && <TopbarActionButton left {...actions.left} />}
      {/* eslint-disable-next-line */}
      {actions.right && <TopbarActionButton right {...actions.right} />}
    </SceneTopbarContainer>
  );
};

SceneTopbar.propTypes = {
  actions: PropTypes.shape({
    left: PropTypes.shape({
      icon: PropTypes.object,
      image: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    }),
    right: PropTypes.shape({
      icon: PropTypes.object,
      image: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

export default SceneTopbar;
