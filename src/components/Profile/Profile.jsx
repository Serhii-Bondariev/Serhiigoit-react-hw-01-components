import css from './Profile.module.css';
import user from 'data/user.json';

export const Profile = () => {
  return (
    <div className={css.profile}>
      <div className={css.profileBase}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{user.username}</p>
        <p className={css.tag}>@{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stat}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
