import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamList = {
  ThreadScreen: {
    threadId: string;
    threadName: string;
  };
  Threads: {
    threadId: string;
    threadName: string;
  };
};

export type StackNavigation = StackNavigationProp<StackParamList>;
