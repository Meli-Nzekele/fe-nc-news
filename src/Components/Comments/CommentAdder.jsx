import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/User";
import { postCommentByArticleId } from "../../Utils/api";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [submitMessage, setSubmitMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  const disableTextArea = newComment.length === 0 || !user;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postCommentByArticleId(article_id, user, newComment).then(
      (commentFromApi) => {
        setSubmitMessage(true);
        setComments((currentComments) => {
          return [commentFromApi, ...currentComments];
        });
      }
    );
    setNewComment("");
    setIsLoading(false);
    setSubmitMessage(false);
  };

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <section className="comment-adder">
      <form onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add a comment</label>
        <textarea
          value={newComment}
          id="newComment"
          onChange={(event) => setNewComment(event.target.value)}
          placeholder={
            !user ? "Login to add a comment" : "Add your comment here..."
          }
          maxLength="101"
          required
        ></textarea>
        <button type="submit" disabled={disableTextArea}>
          {submitMessage ? "Submit Comment" : "Comment Submitted"}
        </button>
      </form>
      <p
        className={
          newComment.length > 100 ? "characters-limit" : "characters-message"
        }
      >
        {newComment.length > 100
          ? "Maximum characters reached"
          : "Maximum 100 Characters"}
      </p>
    </section>
  );
};

export default CommentAdder;
