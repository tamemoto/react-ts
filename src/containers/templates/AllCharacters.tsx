// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import AllCharacters from 'components/templates/AllCharacters';

import { charactersData } from 'data/characters';

const EnhancedAllCharacters: FC = () => {
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const players = Object.values(charactersData)
    .map((v) => v.players)
    .flat()
    .sort((p, q) => ((p.height ?? 160) < (q.height ?? 160) ? -1 : 1));

  return <AllCharacters characters={players} isLoading={isLoading} />;
};

export default EnhancedAllCharacters;
