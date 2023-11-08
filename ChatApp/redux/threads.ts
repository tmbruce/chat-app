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
      messageRead: 5,
      threadId: '2',
    },
    {
      name: 'Michael Pollan',
      message:
        "Did you change your mind? I don't know if you did, but you sure should. I 'm just trying to take up some extra space to see overflow",
      date: '11:35 AM',
      messageRead: 101,
      threadId: '3',
    },
    {
      name: 'Alice Johnson',
      message: 'Doing well, just out for a walk. You?',
      date: '11:35 AM',
      messageRead: true,
      threadId: '4',
    },
    {
      name: 'Mark Turner',
      message: 'Stressed with deadlines but making progress!',
      date: '11:40 AM',
      messageRead: true,
      threadId: '5',
    },
    {
      name: 'Lucy Hernandez',
      message: "Can't complain, it's almost the weekend!",
      date: '11:45 AM',
      messageRead: false,
      threadId: '6',
    },
    {
      name: 'Omar Alexander',
      message: 'Hey team, are we still meeting at 3 PM?',
      date: '11:50 AM',
      messageRead: true,
      threadId: '7',
    },
    {
      name: 'Emma Watson',
      message: 'Yes, the meeting is on. See you there!',
      date: '11:55 AM',
      messageRead: false,
      threadId: '8',
    },
    {
      name: 'Sophia Lee',
      message: 'Reminder: Project deadline is this Friday.',
      date: '12:00 PM',
      messageRead: true,
      threadId: '9',
    },
    {
      name: 'Liam Wong',
      message: 'Thanks for the reminder, Sophia. Almost done with my part.',
      date: '12:05 PM',
      messageRead: false,
      threadId: '10',
    },
    {
      name: 'Zoe Patel',
      message: 'Anyone up for lunch at the new Italian place?',
      date: '12:10 PM',
      messageRead: true,
      threadId: '11',
    },
    {
      name: 'Ethan Gonzalez',
      message: 'Count me in! Heard they have great pasta.',
      date: '12:15 PM',
      messageRead: false,
      threadId: '12',
    },
    {
      name: 'Ava Kim',
      message: "I'll join too, need to step out from coding for a bit.",
      date: '12:20 PM',
      messageRead: true,
      threadId: '13',
    },
    {
      name: 'Mia Sanchez',
      message: 'Working from home today, enjoy your lunch!',
      date: '12:25 PM',
      messageRead: false,
      threadId: '14',
    },
    {
      name: 'Jackson Murphy',
      message: 'Emma, can you share the report from yesterday?',
      date: '12:30 PM',
      messageRead: true,
      threadId: '15',
    },
    {
      name: 'Olivia Garcia',
      message: 'Will do, Jackson. Sending in five.',
      date: '12:35 PM',
      messageRead: false,
      threadId: '16',
    },
    {
      name: 'William Martinez',
      message: "Got the client's feedback. Some minor changes needed.",
      date: '12:40 PM',
      messageRead: true,
      threadId: '17',
    },
    {
      name: 'Harper Robinson',
      message: 'I can handle the revisions after our brainstorm session.',
      date: '12:45 PM',
      messageRead: false,
      threadId: '18',
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
