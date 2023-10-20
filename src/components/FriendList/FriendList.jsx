import React from 'react';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends &&
        friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
    </ul>
  );
};

export default FriendList;
