import { useState } from 'react';
import AddUserForm from './components/users/AddUserForm';
import UserList from './components/users/UserList';
import styles from './App.module.css';

function App() {
  const [userList, setUserList]=useState([]);

  function addUser(newUser){
    setUserList((prevUserList)=>{
      return [...prevUserList, newUser];
    })
  }
  
  return (
    <div className={styles.app}>
      <AddUserForm submitCallback={addUser} />
      {userList.length!==0 && <UserList userData={userList} />}
    </div>
  );
}

export default App;
