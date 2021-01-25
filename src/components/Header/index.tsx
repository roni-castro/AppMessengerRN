import React from 'react';

import {Container} from './styles';
import {H1} from '../Typography';

export const Header = ({title}: {title: string}) => {
  return (
    <Container>
      <H1>{title}</H1>
    </Container>
  );
};
