import React from 'react';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsSection}>
      <ul className={css.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <div className={css.cardItem} key={id}>
            <li className={css.item}>
              <span
                className={
                  isOnline
                    ? `${css.status} ${css.onLine}`
                    : `${css.status} ${css.offLine}`
                }
              ></span>
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};
