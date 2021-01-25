import React from 'react';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

import {TextHeaderContainer, HeaderContainer, ContainerMessage} from './styles';
import {H2, ParagraphLight} from '../../components/Typography';
import MessageBox from '../../components/MessageBox';

export const MessageDetail = () => {
  const {item} = useRoute().params;

  return (
    <ContainerMessage>
      <H2>{item.subject}</H2>
      <MessageBox message={item.detail} />
      <TextHeaderContainer>
        <ParagraphLight>
          {moment(new Date(item.timestamp * 1000)).format('DD/MM/YYYY - HH:MM')}
        </ParagraphLight>
      </TextHeaderContainer>
    </ContainerMessage>
  );
};
