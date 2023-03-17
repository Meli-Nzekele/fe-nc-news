import { useEffect, useState } from "react";
import { getUsers } from "../../Utils/api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      setUsers(usersData);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="users-list">
          {" "}
          {users.map((user, index) => {
            return <UserCard key={index} user={user} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default Users;
