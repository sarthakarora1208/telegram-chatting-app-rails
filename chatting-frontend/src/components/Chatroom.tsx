import React, { useEffect } from 'react';
import { Router, Link } from '@reach/router';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setChatroomId } from '../slices/chatroomSlice';
import { RootState } from '../app/rootReducer';
interface IChatroomProps {
  id: any;
  title: any;
  subscribeToMore: any;
}

export const Chatroom: React.FC<IChatroomProps> = ({
  id,
  title,
  subscribeToMore,
}) => {
  const dispatch = useDispatch();

  const { chatroomId } = useSelector((state: RootState) => {
    return { chatroomId: state.chatroom.chatroomId };
  }, shallowEqual);

  useEffect(() => {}, []);

  return (
    <div
      onClick={() => {
        dispatch(setChatroomId(id));
      }}
      className={
        chatroomId === id
          ? 'list-group-item list-group-item-action bg-primary text-white'
          : 'list-group-item list-group-item-action bg-dark text-white'
      }
    >
      <h4>{title}</h4>
    </div>
  );
};
// <Link
//   to={`/room/${id}`}
//   getProps={({ isCurrent }) => ({
//     className: isCurrent
//       ? 'list-group-item list-group-item-action bg-primary text-white'
//       : 'list-group-item list-group-item-action bg-dark text-white',
//   })}
// >
//   <h4>{title}</h4>
// </Link>
