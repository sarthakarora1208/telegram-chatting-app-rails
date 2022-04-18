import { gql } from '@apollo/client';

export const GET_CHATROOMS_FOR_USER = gql`
  query ($userId: ID!) {
    getChatroomsForUser(userId: $userId) {
      id
      name
      users {
        id
        name
      }
    }
  }
`;

export const GET_MESSAGES_FOR_CHATROOM = gql`
  query ($chatroomId: Int!) {
    getMessagesForChatroom(chatroomId: $chatroomId) {
      id
      text
      userId
      mediaType
      isMedia
    }
  }
`;
