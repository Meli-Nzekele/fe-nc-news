import { useState, useEffect } from "react";
import { getUsers } from "../../Utils/api";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [sortBy, setSortBy] = useState("article_id");
  //   const [orderBy, setOrderBy] = useState("DESC");
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      setUsers(usersData);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <section className="user-login-main">
      <h2 className="user-login-header">Login Below</h2>
      <section className="user-login">
        <form>
          <div>
            <label className="select-user" htmlFor="select-user">
              Select Username:
            </label>

            <select
              id="select-user"
              name="select-user"
              value={users}
              onChange={(event) => setUsers(event.target.value)}
            >
              {users.map((user, index) => {
                return (
                  <option
                    key={index}
                    value={`${user.username}`}
                  >{`${user.username}`}</option>
                );
              })}
            </select>
          </div>
          <button className="user-login-btn" type="submit">
            Login
          </button>
        </form>
      </section>
    </section>
  );
};

export default Login;
