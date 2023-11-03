import React from 'react';
import {render} from '@testing-library/react-native';

import ChatThreadCard from './ChatThreadCard';

describe('ChatThreadCard', () => {
  const chatThread = {
    threadId: '1',
    name: 'Jerry Garcia',
    message: 'Hey, how are you?',
    date: '2021-01-01T00:00:00.000Z',
    messageRead: false,
  };

  test('renders correctly', () => {
    const {getByText} = render(<ChatThreadCard chatThread={chatThread} />);
    expect(getByText(chatThread.name)).toBeTruthy();
    expect(getByText(chatThread.message)).toBeTruthy();
    expect(getByText(chatThread.date)).toBeTruthy();

    const {getByTestId} = render(<ChatThreadCard chatThread={chatThread} />);
    const isMessageRead = getByTestId('messageRead-field');
    expect(isMessageRead).toBeTruthy();
  });
});
