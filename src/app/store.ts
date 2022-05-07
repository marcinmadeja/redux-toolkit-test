import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice';

export const store = configureStore({
  // it will automatically use combine reducers
  reducer: {
    counter: counterReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>