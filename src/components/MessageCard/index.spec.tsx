import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MessageCard from '.';

describe('Unit | MessageCard', () => {
  const mockItem = {
    id: 1,
    timestamp: 1600725149,
    subject: 'subject of the card',
    read: false,
    detail: 'the detail of the card',
  };

  describe('when component is rendered', () => {
    it('format and show the texts correctly', () => {
      const wrapper = render(
        <MessageCard item={mockItem} onMessagePress={jest.fn()} />,
      );
      expect(wrapper.getByText('subject of the card')).toBeTruthy();
      expect(wrapper.getByText('the detail of the card')).toBeTruthy();
    });
  });

  describe('when the component is pressed', () => {
    it('calls the onMessagePress callback with correct props', () => {
      const mockOnMessagePress = jest.fn();
      const wrapper = render(
        <MessageCard item={mockItem} onMessagePress={mockOnMessagePress} />,
      );
      const cardContainer = wrapper.getByTestId('message-card-container');
      fireEvent.press(cardContainer);
      expect(mockOnMessagePress).toHaveBeenNthCalledWith(1, mockItem);
    });
  });
});
