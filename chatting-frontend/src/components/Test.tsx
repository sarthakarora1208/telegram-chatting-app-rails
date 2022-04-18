import { useQuery, useSubscription } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_MESSAGES_FOR_CHATROOM } from '../graphql/queries';
import {
  MESSAGE_ADDED,
  SUBSCRIPTION_ADD_MESSAGE_TO_CHATROOM,
} from '../graphql/subscriptions';

interface ITestProps {}

export const Test: React.FC<ITestProps> = ({}) => {
  //const { data, loading, error } = useSubscription(MESSAGE_ADDED);
  // const { loading, error, data, subscribeToMore } = useQuery(
  //   GET_MESSAGES_FOR_CHATROOM,
  //   {
  //     variables: {
  //       chatroomId: 1,
  //     },
  //   }
  // );

  // useEffect(() => {
  //   console.log('*******');
  //   subscribeToMore({
  //     document: MESSAGE_ADDED,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       console.log('****');
  //       console.log(subscriptionData.data);
  //       console.log('****');
  //       console.log(prev);

  //       if (!subscriptionData.data) return prev;
  //       console.log(subscriptionData.data.messageAdded.message);
  //       const newChat = subscriptionData.data.messageAdded.message;

  //       return {
  //         //getChats: [...prev, message],
  //       };
  //     },
  //   });
  // }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error || !data) {
  //   return <div>{error?.message}</div>;
  // }
  let data = '1';
  return <div>{JSON.stringify(data, null, 4)}</div>;
};
