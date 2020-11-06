// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import CharacterList from './CharacterList';
import characters from './data/characters';
import './App.css';

const App: FC = () => {
  return (
    <div className="container">
      <header>
        <h1>『SLAM DUNK』登場人物</h1>
        <CharacterList school="湘北高校" characters={characters} />
      </header>
    </div>
  );
};

export default App;
