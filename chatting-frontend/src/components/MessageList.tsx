import { useSubscription } from '@apollo/client';
import React, { useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import {
  MESSAGE_ADDED,
  SUBSCRIPTION_ADD_MESSAGE_TO_CHATROOM,
} from '../graphql/subscriptions';
import { addMessage } from '../slices/chatroomSlice';
import { Message } from './Message';
import addNotification from 'react-push-notification';

interface IMessageListProps {
  chatroomId: any;
  loading: any;
  error: any;
  subscribeToMore: any;
}

export const MessageList: React.FC<IMessageListProps> = ({
  chatroomId,
  error,
  loading,
  subscribeToMore,
}) => {
  const lastMessage = useRef<any>();
  const dispatch = useDispatch();

  const { messages, botId } = useSelector((state: RootState) => {
    return {
      messages: state.chatroom.messages,
      botId: state.chatroom.botId,
    };
  }, shallowEqual);

  useEffect(() => {
    if (!lastMessage.current) return;
    lastMessage.current!.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  useEffect(() => {
    console.log('*******');
    subscribeToMore({
      document: MESSAGE_ADDED,
      updateQuery: (
        prev: any,
        { subscriptionData }: { subscriptionData: any }
      ) => {
        console.log('****');
        console.log(subscriptionData.data);
        console.log('****');
        console.log(prev);

        if (!subscriptionData.data) return prev;
        if (subscriptionData.data && subscriptionData.data.messageAdded) {
          const newMessage = subscriptionData.data.messageAdded.message;
          if (parseInt(chatroomId, 10) === newMessage.chatroomId) {
            dispatch(addMessage(newMessage));
            console.log(newMessage);
            if (newMessage.userId !== 1) {
              addNotification({
                title: 'New message',
                subtitle: newMessage.text,
                message: newMessage.text,
                theme: 'darkblue',
                native: true, // when using native, your OS will handle theming.
              });
            }
          }
        }
        //console.log(subscriptionData.data.messageAdded);
      },
    });
  }, []);
  useEffect(() => {}, []);

  if (loading || error) return null;

  let renderedMessages;

  if (messages.length > 0) {
    renderedMessages = messages.map((message: any) => {
      return (
        <div
          key={message.id}
          ref={lastMessage}
          className={`d-flex flex-column align-items-${
            botId === message.userId ? 'end' : 'start'
          } justify-content-start py-1`}
        >
          <Message
            userId={message.userId}
            text={message.text}
            mediaType={message.mediaType}
            isMedia={message.isMedia}
          />
        </div>
      );
    });
  } else {
    renderedMessages = <div>No messages found!</div>;
  }
  return <div className={`d-flex flex-column`}>{renderedMessages}</div>;
};
