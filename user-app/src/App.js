import { useState } from 'react';
import AddUserForm from './components/users/AddUserForm';
import UserList from './components/users/UserList';
import styles from './App.module.css';

function App() {
  const [userList, setUserList]=useState([]);
  return (
    <div className={styles.app}>
      <AddUserForm />
      {userList.length!==0 && <UserList />}
    </div>
  );
}

export default App;
