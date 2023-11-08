import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ChatThreadCard from './ChatThreadCard';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

// Mock the UserAvatar and Badge components
jest.mock('react-native-user-avatar', () => 'UserAvatar');
jest.mock('./badge', () => 'Badge');

describe('ChatThreadCard', () => {
  // Define a base set of props to reuse across tests
  const baseProps = {
    chatThread: {
      name: 'John Doe',
      message: 'Hey! How are you?',
      date: '2021-09-01',
      messageRead: true,
      threadId: '1',
    },
  };

  it('renders correctly with given props', () => {
    const {getByText} = render(<ChatThreadCard {...baseProps} />);

    expect(getByText(baseProps.chatThread.name)).toBeTruthy();
    expect(getByText(baseProps.chatThread.message)).toBeTruthy();
    expect(getByText(baseProps.chatThread.date)).toBeTruthy();
    // Assuming the Badge component will display something based on the read prop
    // You will need to ensure that your mock returns something that can be asserted on.
  });

  // Additional tests could include:
  // - Checking if the badge is shown or hidden based on the messageRead prop
  // - Verifying other interactive elements, if they exist
});
