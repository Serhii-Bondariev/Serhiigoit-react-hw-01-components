import React from 'react';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendListItem } from './FriendListItem/FriendListItem';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" />
      <FriendList friends={friends} />
      {/* <FriendListItem friend={friends[0]} /> */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
