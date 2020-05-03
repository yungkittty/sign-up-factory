import React from 'react';
import SceneTitle from '../../../../components/scene-title';
import SceneSubtitle from '../../../../components/scene-subtitle';

const HomeListHeader = () => (
  <>
    <SceneTitle>
      {/* eslint-disable-line */}
      Home
    </SceneTitle>
    <SceneSubtitle errored={false}>
      {/* eslint-disable-line */}
      Stalk our users by pressing on them!
    </SceneSubtitle>
  </>
);

export default HomeListHeader;
