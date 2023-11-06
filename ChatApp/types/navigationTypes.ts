import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ThreadScreen: {
    threadId: string;
    threadName: string;
    message: string;
  };
  Threads: {
    threadId: string;
    threadName: string;
  };
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

// TODO
// Modify ThreadScreen to reflect message architecture.
