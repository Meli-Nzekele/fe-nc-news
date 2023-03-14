import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticlesById } from "../Utils/api";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

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
            <p>Date: {singleArticle.created_at}</p>
            <img
              src={singleArticle.article_img_url}
              alt={singleArticle.title}
              id="single-article-img"
            />
            <p>{singleArticle.body}</p>

            <p>Votes: {singleArticle.votes}</p>
            <p>Comments: {singleArticle.comment_count}</p>
            {/* Date to be formatted at a later stage */}
            <Link to="/">
              <button>Back to Articles</button>
            </Link>
            <hr />
          </article>
        </li>
      </ul>
    </section>
  );
};

export default SingleArticle;
