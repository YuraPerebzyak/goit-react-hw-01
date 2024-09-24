import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.image_card} src={image} alt="User avatar" />
        <p className={styles.profile_name}>{name}</p>
        <p className={styles.profile_tag}>@{tag}</p>
        <p className={styles.profile_location}>{location}</p>
      </div>
      <ul className={styles.profile_list}>
        <li className={styles.profile_list_item}>
          <span className={styles.profile_list_title}>Followers</span>
          <span className={styles.profile_list_stats}>{stats.followers}</span>
        </li>
        <li className={styles.profile_list_item}>
          <span className={styles.profile_list_title}>Views</span>
          <span className={styles.profile_list_stats}>{stats.views}</span>
        </li>
        <li className={styles.profile_list_item}>
          <span className={styles.profile_list_title}>Likes</span>
          <span className={styles.profile_list_stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
