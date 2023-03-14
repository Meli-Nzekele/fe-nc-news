import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <li className="article-card">
      <article>
        <img src={article.article_img_url} alt={article.title} />
        <h3>{article.title}</h3>
        <p>Topic: {article.topic}</p>
        <p>By: {article.author}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Date: {article.created_at}</p>
        {/* Date to be formatted at a later stage */}

        <Link to={`/articles/${article.article_id}`}>
          <button>Read More</button>
        </Link>
      </article>
    </li>
  );
};

export default ArticleCard;
