import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Contexts/User";
import { getCommentsById, deleteCommentByCommentID } from "../../Utils/api";
import CommentsCard from "./CommentsCard";
import CommentAdder from "./CommentAdder";

const Comments = ({ article_id }) => {
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [comments, setComments] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getCommentsById(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [article_id]);

  const deleteComment = (comment_id) => {
    setIsDeleted(true);
    setShowDeleteMessage(true);
    deleteCommentByCommentID(comment_id).then(() => {
      setComments((currComments) => {
        return currComments.filter(
          (comment) => comment.comment_id !== comment_id
        );
      });
      setIsDeleted(false);
      setShowDeleteMessage(false);
    });
  };

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <section>
      <CommentAdder setComments={setComments} article_id={article_id} />
      <div className="comments-div">
        <i className="fa-regular fa-comment"></i>{" "}
        <p>{comments.length} comments </p>
      </div>
      <p className="comments-message">
        {showDeleteMessage ? "Comment Deleted" : "showing all comments"}
      </p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="single-comment">
              <CommentsCard
                article_id={comment.article_id}
                author={comment.author}
                body={comment.body}
                comment_id={comment.comment_id}
                votes={comment.votes}
                created_at={comment.created_at}
              />
              {comment.author === user ? (
                <button
                  className="delete-comment-btn"
                  onClick={() => deleteComment(comment.comment_id)}
                >
                  {isDeleted ? "Deleting Comment" : "Delete Comment"}
                </button>
              ) : (
                <p className="delete-permission">
                  You don't have access to edit/delete this comment
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
