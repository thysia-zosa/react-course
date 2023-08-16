import styles from './UserListItem.module.css';

const UserListItem=({name, age})=>{
  return (<p className={styles.userListItem}>{name} ({age} years old)</p>)
}

export default UserListItem;