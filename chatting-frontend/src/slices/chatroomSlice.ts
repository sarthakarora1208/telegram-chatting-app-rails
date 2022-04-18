import { AppThunk } from './../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../models/message';

export interface initialState {
  loading: boolean;
  error: string | null;
  chatroomId: number;
  userId: number;
  user: any;
  botId: number;
  botUser: any;
  messages: Message[];
}

export const initialState: initialState = {
  loading: false,
  error: null,
  chatroomId: -1,
  userId: 2,
  user: null,
  botId: 1,
  botUser: null,
  messages: [],
};

const chatroomSlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    setChatroomId: (state, action: PayloadAction<number>) => {
      state.chatroomId = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setBotId: (state, action: PayloadAction<number>) => {
      state.botId = action.payload;
    },
    setBotUser: (state, action: PayloadAction<any>) => {
      state.botUser = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      if (!state.messages.find((message) => message.id === action.payload.id)) {
        state.messages = [...state.messages, action.payload];
      }
    },
  },
});

export const {
  setChatroomId,
  setUserId,
  setUser,
  setBotId,
  setBotUser,
  setMessages,
  addMessage,
} = chatroomSlice.actions;

export default chatroomSlice.reducer;
