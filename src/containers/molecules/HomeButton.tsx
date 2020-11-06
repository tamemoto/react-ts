// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const EnhancedHomeButton: FC = () => {
  const history = useHistory();

  return (
    <>
      <Button basic color="grey" onClick={() => history.push('/')}>
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  );
};

export default EnhancedHomeButton;
