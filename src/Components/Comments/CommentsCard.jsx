import CommentVotes from "./CommentVotes";

const CommentsCard = ({
  article_id,
  author,
  body,
  comment_id,
  votes,
  created_at,
}) => {
  let date = new Date(created_at);
  date = date.toUTCString();

  return (
    <article>
      <p>Article: {article_id}</p>
      <p>By: {author}</p>
      <p className="comment-body">{body}</p>
      <CommentVotes comment_id={comment_id} commentVotes={votes} />
      <p>{date}</p>
    </article>
  );
};

export default CommentsCard;
