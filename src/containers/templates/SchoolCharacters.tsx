// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { parse } from 'query-string';

import { Helmet } from 'react-helmet';
import { Header, Icon, Item } from 'semantic-ui-react';
import Spinner from 'components/molecules/Spinner';

import { charactersData } from 'data/characters';

const EnhancedSchoolCharacters: FC = () => {
  const { schoolCode } = useParams<{ schoolCode: string }>();
  const { search } = useLocation();
  const isLoading = !!parse(search)?.loading;
  const schoolCodeList = Object.keys(charactersData);

  if (schoolCodeList.includes(schoolCode)) {
    const { school, players } = charactersData[schoolCode];
    const characters = players;

    return (
      <>
        <Helmet>
          <title>登場人物一覧 | {school}</title>
        </Helmet>
        <Header as="h2">{school}</Header>
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
  }

  return <Redirect to="/" />;
};

export default EnhancedSchoolCharacters;
