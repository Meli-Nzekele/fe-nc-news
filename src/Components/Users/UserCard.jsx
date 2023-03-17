import { useContext } from "react";
import { UserContext } from "../../Contexts/User";

const UserCard = ({ user }) => {
  const { user: loggedInUser, setUser } = useContext(UserContext);

  console.log(loggedInUser, "<<<loggedinuser UserCard");
  console.log(user, "<<<user from props ");

  return (
    <article>
      <li className="user-card">
        <p>user.username</p>
        <img src={user.avatar_url} alt="user profile" />
        <button onClick={() => setUser(user)}>Click to Login</button>
      </li>
    </article>
  );
};

export default UserCard;
