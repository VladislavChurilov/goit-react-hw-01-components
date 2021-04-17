import PropTypes from 'prop-types';
import styles from './Friends.module.css';

// import FriendList from './FriendList';

const FriendListItem = ({ avatar, name, isOnline}) =>(
    <li className={styles.item}  >
        {isOnline? 
        <span className={styles.statusGreen}> </span>:
        <span className={styles.statusRed}> </span> }
        {/* <span class="status"></span> */}
        <img className={styles.avatar} 
        src={avatar} alt="Avatar" 
        width="60" />
        <p className={styles.name}>{name}</p>
    </li>
    
);

FriendListItem.defaultProps ={
    avatar: "https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg",   
   }

FriendListItem.propTypes = {
    
    name: PropTypes.string.isRequired,       
    avatar: PropTypes.string,
    isOnline:  PropTypes.bool.isRequired,
}

export default FriendListItem;