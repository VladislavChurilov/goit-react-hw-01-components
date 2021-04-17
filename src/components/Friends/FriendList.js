import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './Friends.module.css';

const FriendsList = ({friends}) => (
<ul className={styles.friendList}>
  {friends.map((friend) => (
    // <li  > 
      <FriendListItem 
      key= {friend.id}
      avatar={friend.avatar} 
      name={friend.name} 
      isOnline={friend.isOnline}/>
    //  </li> 
  ))}
</ul>
);

FriendsList.propTypes = {
  
  friends: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,          
      })
  ).isRequired,
}

export default FriendsList;