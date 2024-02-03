/* Configure store */

import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
