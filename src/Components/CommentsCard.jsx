const CommentsCard = ({ comment }) => {
  let date = new Date(comment.created_at);
  date = date.toUTCString();

  return (
    <li>
      <article className="single-comment">
        <h4>{comment.title}</h4>
        <p>Article: {comment.article_id}</p>
        <p>By: {comment.author}</p>
        <p className="comment-body">{comment.body}</p>

        <p>Votes: {comment.votes}</p>

        <p>{date}</p>
      </article>
    </li>
  );
};

export default CommentsCard;
