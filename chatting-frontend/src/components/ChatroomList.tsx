import { ObservableQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { Chatroom } from './Chatroom';

interface IChatroomListProps {
  loading: boolean;
  error: any;
  data: any;
  subscribeToMore: any;
}

export const ChatroomList: React.FC<IChatroomListProps> = ({
  loading,
  error,
  data,
  subscribeToMore,
}) => {
  if (loading || error) return null;
  return data.map((chatroom: any) => (
    <Chatroom
      key={chatroom.id}
      id={chatroom.id}
      title={chatroom.users[0].name}
      subscribeToMore={subscribeToMore}
    />
  ));
};
