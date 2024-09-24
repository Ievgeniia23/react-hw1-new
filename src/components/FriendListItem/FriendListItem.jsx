import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
  <div>
  <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          <p className={isOnline ? css.isOnline : css.offLine}>
              {isOnline ? 'is Online' : 'is OffLine'}</p>
</div>
  )
}

export default FriendListItem;


