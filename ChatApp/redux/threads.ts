import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ChatThreadCard as ChatThreadCardType} from '../types';

interface ThreadsState {
  threads: ChatThreadCardType[];
}

const initialState: ThreadsState = {
  threads: [
    {
      name: 'John Doe',
      message: 'Hey, how are you?',
      date: '11:30 AM',
      messageRead: false,
      threadId: '1',
    },
    {
      name: 'Jane Doe',
      message: 'I am fine, thank you.',
      date: '11:33 AM',
      messageRead: false,
      threadId: '2',
    },
    {
      name: 'Michael Pollan',
      message: 'Did you change your mind?',
      date: '11:35 AM',
      messageRead: false,
      threadId: '3',
    },
  ],
};

export const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    addThread: (state, action: PayloadAction<ChatThreadCardType>) => {
      state.threads.push(action.payload);
    },
  },
});

export const {addThread} = threadsSlice.actions;
export default threadsSlice.reducer;
