import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../Utils/api";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav>
      <ul className="nav-bar">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/articles">
          All Articles
        </Link>
        {topics.map((topic, index) => {
          return (
            <Link key={index} className="Link" to={`/articles/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
