const ArticleCard = ({ article }) => {
  return (
    <li>
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>Topic: {article.topic}</p>
      <p>By: {article.author}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Date: {article.created_at}</p>
      {/* Date to be formatted at a later stage */}
      <button>Read More</button>
      {/* Link to individual article to be added to button */}
    </li>
  );
};

export default ArticleCard;
