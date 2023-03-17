import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC-NEWS</h1>
      <Link to="/Login" className="Login-btn-Link">
        <button className="Login-btn">
          <p>Login</p> <i className="fa-solid fa-user"></i>
        </button>
      </Link>
    </header>
  );
};

export default Header;
