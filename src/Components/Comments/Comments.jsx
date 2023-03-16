import { useEffect, useState } from "react";
import { getCommentsById } from "../../Utils/api";
import CommentsCard from "./CommentsCard";
import CommentAdder from "./CommentAdder";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getCommentsById(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [article_id]);

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
      <ul>
        {comments.map((comment, index) => {
          return <CommentsCard key={index} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default Comments;
