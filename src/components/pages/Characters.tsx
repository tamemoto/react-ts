// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import HomeButton from 'containers/molecules/HomeButton';

const Characters: FC = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
      </header>
      <Switch>
        <Route exact path={path}>
          全ての選手
        </Route>
        <Route path={`${path}/:schoolCode`}>各スクーる</Route>
      </Switch>
      <Divider hidden />
      <HomeButton />
    </>
  );
};

export default Characters;
