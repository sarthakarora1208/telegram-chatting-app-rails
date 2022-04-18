import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ChatInput } from './ChatInput';
import { GET_MESSAGES_FOR_CHATROOM } from '../graphql/queries';
import { RouteComponentProps } from '@reach/router';
import { MessageList } from './MessageList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../slices/chatroomSlice';
import { RootState } from '../app/rootReducer';

interface IMessagesProps {}

export const Messages: React.FC<IMessagesProps> = (props) => {
  const dispatch = useDispatch();
  const { chatroomId } = useSelector((state: RootState) => {
    return { chatroomId: state.chatroom.chatroomId };
  }, shallowEqual);

  const { loading, error, data, subscribeToMore } = useQuery(
    GET_MESSAGES_FOR_CHATROOM,
    {
      variables: {
        chatroomId: parseInt(chatroomId.toString(), 10),
      },
    }
  );
  console.log(chatroomId);

  useEffect(() => {
    if (data && data.getMessagesForChatroom) {
      dispatch(setMessages(data.getMessagesForChatroom));
    }
  }, [data, chatroomId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <>
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1 overflow-auto p-3 bg-light">
          <MessageList
            loading={loading}
            subscribeToMore={subscribeToMore}
            chatroomId={chatroomId}
            error={error}
          />
        </div>
        <ChatInput />
      </div>
    </>
  );
};
