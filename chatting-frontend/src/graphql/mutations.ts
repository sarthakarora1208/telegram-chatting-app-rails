import { gql } from '@apollo/client';

export const ADD_MESSAGE_TO_CHATROOM = gql`
  mutation createMessage(
    $text: String!
    $isMedia: Boolean!
    $mediaType: String!
    $userId: Int!
    $chatroomId: Int!
  ) {
    createMessage(
      text: $text
      isMedia: $isMedia
      mediaType: $mediaType
      userId: $userId
      chatroomId: $chatroomId
    ) {
      text
      isMedia
      mediaType
      userId
      chatroomId
    }
  }
`;
