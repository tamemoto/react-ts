// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import HomeButton from 'containers/molecules/HomeButton';

const Characters: FC = () => {
  return (
    <>
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <Outlet />
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Characters;
