import React from 'react';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import Divider from '../Divider';
import {H2, ParagraphLight, ParagraphNormal} from '../Typography';
import {IMessageData} from '../models/messages';

interface IMessageCardProps {
  item: IMessageData;
}

const MessageCard = ({item}: IMessageCardProps) => (
  <TouchableOpacity onPress={() => console.warn(`clickou ${item.id}`)}>
    <H2>{item.subject}</H2>
    <ParagraphLight>
      {moment(new Date(item.timestamp * 1000)).fromNow()}
    </ParagraphLight>
    <ParagraphNormal numberOfLines={2} ellipsizeMode="tail">
      {item.detail}
    </ParagraphNormal>
    <Divider />
  </TouchableOpacity>
);

export default MessageCard;
