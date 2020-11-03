// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export type Character = {
  id: number;
  name: string;
  grade: number;
  height?: number;
};

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = (props) => {
  const { school, characters } = props;

  return (
    <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map((character) => {
          return (
            <Item key={character.id}>
              <Icon name="user circle" size="huge" />
              <Item.Content>
                <Item.Header>{character.name}</Item.Header>
                <Item.Meta>{character.grade}</Item.Meta>
                <Item.Meta>{character.height ?? '???'}cm</Item.Meta>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </>
  );
};

export default CharacterList;
