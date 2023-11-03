import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  ThreadScreen: {
    threadId: String;
    threadName: String;
  };
};

export type StackNavigation = StackNavigationProp<StackParamList>;
