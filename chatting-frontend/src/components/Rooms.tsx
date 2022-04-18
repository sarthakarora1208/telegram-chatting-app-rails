import React from 'react';
import { useQuery } from '@apollo/client';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import { GET_CHATROOMS_FOR_USER } from '../graphql/queries';
import { ChatroomList } from './ChatroomList';

interface IRoomsProps {}

export const Rooms: React.FC<IRoomsProps> = (props) => {
  const { botId } = useSelector((state: RootState) => {
    return {
      botId: state.chatroom.botId,
    };
  }, shallowEqual);

  const { loading, error, data, subscribeToMore } = useQuery(
    GET_CHATROOMS_FOR_USER,
    {
      variables: { userId: botId },
    }
  );

  if (loading) return <p>"Loading...";</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <div className="list-group">
      <ChatroomList
        loading={loading}
        error={error}
        data={data.getChatroomsForUser}
        subscribeToMore={subscribeToMore}
      />
    </div>
  );
};
