import React from 'react';

import {ParagraphNormal} from '../Typography';
import {Container} from './styles';

const MessageBox = ({message}) => {
  return (
    <Container>
      <ParagraphNormal style={{color: '#f4f5f6'}}>{message}</ParagraphNormal>
    </Container>
  );
};

export default MessageBox;
