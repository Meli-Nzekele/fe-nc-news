import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesById } from "../Utils/api";
import Comments from "./Comments";
import Votes from "./Votes";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  let date = new Date(singleArticle.created_at);
  date = date.toLocaleString();

  useEffect(() => {
    setIsLoading(true);

    getArticlesById(article_id).then((articleData) => {
      setSingleArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <section className="single-article">
      <ul>
        <li>
          <article>
            <p className="single-article-topic">{singleArticle.topic}</p>
            <h3>{singleArticle.title}</h3>
            <p>By: {singleArticle.author}</p>
            <p>{date}</p>
            <img
              src={singleArticle.article_img_url}
              alt={singleArticle.title}
              id="single-article-img"
            />
            <p>{singleArticle.body}</p>

            <Votes
              articleVotes={singleArticle.votes}
              article_id={singleArticle.article_id}
            />
            <Link to="/">
              <button>Back to Articles</button>
            </Link>
          </article>
        </li>
      </ul>
      <Comments article_id={article_id} />
    </section>
  );
};

export default SingleArticle;
