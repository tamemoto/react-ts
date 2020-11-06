// eslint-disable-next-line no-use-before-define
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';

import CharacterList from './CharacterList';
import characters from './data/characters';
import './App.css';

const App: FC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          ほげ
        </Route>
        <Route path="/characters">
          <header>
            <h1>『SLAM DUNK』登場人物</h1>
            <CharacterList school="湘北高校" characters={characters} />
          </header>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
