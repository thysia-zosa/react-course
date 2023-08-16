import Card from "../UI/Card";
import UserListItem from "./UserListItem";

const UserList = ({ userData }) => {
  return (
    <Card>
      {userData.map((userEntry) => (
        <UserListItem
          key={userEntry.id}
          name={userEntry.userName}
          age={userEntry.userAge}
        />
      ))}
    </Card>
  );
};

export default UserList;
