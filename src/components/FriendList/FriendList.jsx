import React from 'react';
import friends from 'data/friends.json';
import css from './Friend.module.css';
export const FriendList = () => {
  return (
    <section className={css.friendsSection}>
      <div>
        <ul className={css.friendsList}>
          <div class={css.cardItem}>
            <li class={css.item.id}>
              <span class={css.status}>{friends.isOnline}</span>
              <img
                class={css.avatar}
                src={friends.avatar}
                alt="User avatar"
                width="48"
              />
              <p class={css.name}>{friends.name}</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};
