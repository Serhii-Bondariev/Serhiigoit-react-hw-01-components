import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
};
