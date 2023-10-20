import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;

  return (
    <div className={css.cardItem} key={id}>
      <li className={css.item}>
        <span
          className={
            isOnline
              ? `${css.status} ${css.onLine}`
              : `${css.status} ${css.offLine}`
          }
        ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </div>
  );
};

export default FriendListItem;
