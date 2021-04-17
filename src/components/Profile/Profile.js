import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats}) => (
<div className={styles.profile}>
  <div  className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
      width = "480"
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.items}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li className={styles.items}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li className={styles.items}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
);

Profile.defaultProps ={
 avatar: "https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg",
// и сделать импорт картинки если не ссылка
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired,     
}

export default Profile;

// const styles={
//   outline:"1px solid tomato",
// }
// style={styles}  прописать в нужном теге