// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const HomeButton: FC<{ redirectToHome?: () => void }> = ({
  redirectToHome = () => undefined,
}) => {
  return (
    <>
      <Button basic color="grey" onClick={redirectToHome}>
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  );
};

export default HomeButton;
