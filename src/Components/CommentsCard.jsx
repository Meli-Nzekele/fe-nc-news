const CommentsCard = ({ comment }) => {
  return (
    <li>
      <article className="single-comment">
        <h4>{comment.title}</h4>
        <p>Article: {comment.article_id}</p>
        <p>By: {comment.author}</p>
        <p className="comment-body">{comment.body}</p>

        <p>Votes: {comment.votes}</p>

        <p>Date: {comment.created_at}</p>
        {/* Date to be formatted at a later stage */}
      </article>
    </li>
  );
};

export default CommentsCard;
