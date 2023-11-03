import {StackNavigationProp} from '@react-navigation/stack';

type StackParamList = {
  ThreadScreen: {
    threadId: String;
    threadName: String;
  };
};

export type StackNavigation = StackNavigationProp<StackParamList>;
