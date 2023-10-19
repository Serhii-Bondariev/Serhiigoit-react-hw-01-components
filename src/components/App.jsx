import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" />
      <FriendList />
    </div>
  );
};
