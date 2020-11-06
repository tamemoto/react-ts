// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { Helmet } from 'react-helmet';
import { Icon, Item } from 'semantic-ui-react';
import Spinner from 'components/molecules/Spinner';

import { charactersData } from 'data/characters';
// type Props = {
//     characters: Character[];
//     isLoading?: boolean;
// }

const EnhancedAllCharacters: FC = () => {
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const characters = Object.values(charactersData)
    .map((v) => v.players)
    .flat()
    .sort((p, q) => ((p.height ?? 160) < (q.height ?? 160) ? -1 : 1));

  return (
    <>
      <Helmet>
        <title>登場人物一覧</title>
      </Helmet>
      {isLoading ? (
        <Spinner />
      ) : (
        <Item.Group>
          {characters.map((character) => (
            <Item key={character.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.grade}年生</Item.Meta>
                <Item.Meta>
                  {character.height ?? '???'}
                  cm
                </Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      )}
    </>
  );
};

export default EnhancedAllCharacters;
