import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friend_list_box}>
      <img
        className={styles.friend_list_image}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={styles.friend_list_name}>{name}</p>
      {isOnline ? (
        <p className={styles.friend_list_status_online}>Online</p>
      ) : (
        <p className={styles.friend_list_status_offline}>Offline</p>
      )}
    </div>
  );
}
