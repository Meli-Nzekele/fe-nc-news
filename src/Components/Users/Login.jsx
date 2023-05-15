import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts/User";
import { getUsers } from "../../Utils/api";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user, login, logout, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      setUsers(
        usersData.map((userData) => {
          setIsLoading(false);
          return userData.username;
        })
      );
    });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    if (users.includes(username)) {
      login(username);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    if (users.includes(username)) {
      logout(username);
    }
  };

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <section className="user-login-main">
      <form className="user-login-form" onSubmit={handleLogin}>
        <h2 className="user-login-header">Login</h2>
        <label className="username" htmlFor="username-select">
          Select your username:
        </label>
        <select
          id="username-select"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        >
          <option value="tickle122">@tickle122</option>
          <option value="grumpy19">@grumpy19</option>
          <option value="happyamy2016">@happyamy2016</option>
          <option value="cooljmessy">@cooljmessy</option>
          <option value="weegembump">@weegembump</option>
          <option value="jessjelly">@jessjelly</option>
        </select>

        <button
          className={
            loggedInUser && username === user
              ? "logged-in-message"
              : "user-login-btn"
          }
          type="submit"
        >
          {loggedInUser && username === user
            ? `Logged in as ${username}`
            : "Login"}
        </button>
      </form>
      {loggedInUser && username === user ? (
        <button className="user-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : null}
    </section>
  );
};

export default Login;
