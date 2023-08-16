import { useState } from "react";
import AddUserForm from "./components/users/AddUserForm";
import UserList from "./components/users/UserList";
import styles from "./App.module.css";

function App() {
  const [userList, setUserList] = useState([]);

  function addUser(newUser) {
    setUserList((prevUserList) => {
      const newId =
        prevUserList.length === 0
          ? 1
          : Math.max(...prevUserList.map((item) => item.id)) + 1;
      return [...prevUserList, { id: newId, ...newUser }];
    });
  }

  return (
    <div className={styles.app}>
      <AddUserForm submitCallback={addUser} />
      {userList.length !== 0 && <UserList userData={userList} />}
    </div>
  );
}

export default App;
