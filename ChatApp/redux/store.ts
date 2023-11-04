import {configureStore} from '@reduxjs/toolkit';
import threadReducer from './threads';

export const store = configureStore({
  reducer: {
    threads: threadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
