import React from 'react';
import moment from 'moment';
import Divider from '../Divider';
import {H2, ParagraphLight, ParagraphNormal} from '../Typography';
import {IMessageData} from '../../models/messages';
import {Container, TitleContainer} from './styles';

interface IMessageCardProps {
  item: IMessageData;
  onMessagePress: (item: IMessageData) => void;
}

const MessageCard = ({item, onMessagePress}: IMessageCardProps) => (
  <Container
    testID="message-card-container"
    onPress={() => onMessagePress(item)}>
    <TitleContainer>
      <H2 style={{width: '70%'}} numberOfLines={1} ellipsizeMode="tail">
        {item.subject}
      </H2>
      <ParagraphLight>
        {moment(new Date(item.timestamp * 1000)).fromNow()}
      </ParagraphLight>
    </TitleContainer>
    <ParagraphNormal numberOfLines={2} ellipsizeMode="tail">
      {item.detail}
    </ParagraphNormal>
    <Divider />
  </Container>
);

export default MessageCard;
