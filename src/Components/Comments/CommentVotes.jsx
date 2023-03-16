import { useState } from "react";
import { patchCommentVotes } from "../../Utils/api";

const CommentVotes = ({ commentVotes, comment_id }) => {
  const [votes, setVotes] = useState(commentVotes);
  const [error, setError] = useState(null);

  const handleVote = (numOfVotes) => {
    setVotes((currentVotes) => {
      return currentVotes + numOfVotes;
    });

    setError(null);

    patchCommentVotes(comment_id, numOfVotes).catch(() => {
      setVotes((currentVotes) => {
        return currentVotes - numOfVotes;
      });
      setError("Voting Error");
    });
  };

  return error ? (
    <section>
      <p>{error}</p>
    </section>
  ) : (
    <section className="comment-votes">
      <button>Votes: {votes}</button>
      <button onClick={() => handleVote(1)}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      <button onClick={() => handleVote(-1)}>
        <i className="fa-solid fa-arrow-down"></i>
      </button>
    </section>
  );
};

export default CommentVotes;
