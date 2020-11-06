// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import HomeButton from 'containers/molecules/HomeButton';

import AllCharacters from 'containers/templates/AllCharacters';
import SchoolCharacters from 'containers/templates/SchoolCharacters';

const Characters: FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <Switch>
        <Route exact path={path}>
          <AllCharacters />
        </Route>
        <Route path={`${path}/:schoolCode`}>
          <SchoolCharacters />
        </Route>
      </Switch>
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Characters;
