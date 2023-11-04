// ChatThreadCard.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ChatThreadCard from './ChatThreadCard';
import {useNavigation} from '@react-navigation/native';

// Mocking the useNavigation hook
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('ChatThreadCard', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  // Set up the mock useNavigation hook
  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue(navigation);
  });

  const chatThread = {
    threadId: '1',
    name: 'Jerry Garcia',
    message: 'Hey, how are you?',
    date: '2021-01-01T00:00:00.000Z',
    messageRead: false,
  };

  test('renders correctly', () => {
    const {getByText} = render(<ChatThreadCard chatThread={chatThread} />);

    const nameElement = getByText(chatThread.name);
    const messageElement = getByText(chatThread.message);
    const dateElement = getByText(chatThread.date);

    expect(nameElement).toBeTruthy();
    expect(messageElement).toBeTruthy();
    expect(dateElement).toBeTruthy();
  });

  test.skip('navigates to thread screen on press', () => {
    const {getByTestId} = render(<ChatThreadCard chatThread={chatThread} />);
    const touchable = getByTestId('touchable');

    fireEvent.press(touchable);

    expect(navigation.navigate).toHaveBeenCalledWith('ThreadScreen', {
      threadId: chatThread.threadId,
      threadName: chatThread.name,
    });
  });
});
