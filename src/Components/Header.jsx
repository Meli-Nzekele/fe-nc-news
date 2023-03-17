import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Contexts/User";

const Header = () => {
  const { loggedInUser, user } = useContext(UserContext);

  return (
    <header>
      <h1>NC-NEWS</h1>
      <Link to="/Login" className="Login-btn-Link">
        <button className={loggedInUser ? "Logged-in-btn" : "Logged-out-btn"}>
          <p>{loggedInUser ? `${user}` : "Login"}</p>{" "}
          <i className="fa-solid fa-user"></i>
        </button>
      </Link>
    </header>
  );
};

export default Header;
