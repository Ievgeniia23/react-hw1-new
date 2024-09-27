import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends, onSayMyName }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
            <button onClick={() => onSayMyName(friend.name)}>Say my name</button>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
