import { useState } from "react";
import { postCommentByArticleId } from "../../Utils/api";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(true);

  const user = "grumpy19";

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
          placeholder="Add your comment here..."
          maxLength="101"
          required
        ></textarea>
        <button type="submit">
          {submitMessage === true ? "Submit Comment" : "Comment Submitted"}
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
