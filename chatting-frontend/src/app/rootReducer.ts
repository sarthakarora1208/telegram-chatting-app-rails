import { combineReducers } from '@reduxjs/toolkit';
import chatRoomReducer from '../slices/chatroomSlice';

const rootReducer = combineReducers({
  chatroom: chatRoomReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
