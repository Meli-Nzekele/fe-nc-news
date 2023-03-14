import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          {" "}
          <Link className="Link" to="/">
            All Articles
          </Link>
        </li>
        <li>Coding</li>
        <li>Football</li>
        <li>Cooking</li>
      </ul>
    </nav>
  );
};

export default NavBar;
