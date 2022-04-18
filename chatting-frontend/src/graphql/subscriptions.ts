import { gql } from '@apollo/client';

// export const SUBSCRIPTION_ADD_MESSAGE_TO_CHATROOM = gql`
//   subscription MessageAddedToChatroom($chatroomId: Int!) {
//     messageAddedToChatroom(chatroomId: $chatroomId ) {
//       id
//       isMedia
//     }
//   }
// `;
export const SUBSCRIPTION_ADD_MESSAGE_TO_CHATROOM = gql`
  subscription MessageAddedToChatroom($chatroomId: Int!) {
    messageAddedToChatroom(input: { chatroomId: $chatroomId }) {
      message {
        id
        isMedia
      }
    }
  }
`;

export const MESSAGE_ADDED = gql`
  subscription MessagedAdded {
    messageAdded {
      message {
        id
        text
        isMedia
        mediaType
        userId
        chatroomId
      }
    }
  }
`;
// export const SUBSCRIPTION_ADD_MESSAGE_TO_CHATROOM = gql`
//   subscription MessageAddedToChatroom {
//     messageAddedToChatroom {
//       id
//       isMedia
//     }
//   }
// `;
