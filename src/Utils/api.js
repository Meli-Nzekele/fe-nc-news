import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://be-nc-news-q7oo.onrender.com",
});

export const getTopics = () => {
  return ncnewsApi.get(`/api/topics`).then((topics) => {
    return topics.data.topics;
  });
};

export const getArticles = (topic) => {
  return ncnewsApi
    .get("/api/articles/", {
      params: {
        topic,
      },
    })
    .then((articles) => {
      return articles.data.articles;
    });
};

export const getArticlesById = (article_id) => {
  return ncnewsApi.get(`/api/articles/${article_id}`).then((article) => {
    return article.data.article;
  });
};

export const patchArticleVotes = (article_id, numOfVotes) => {
  return ncnewsApi
    .patch(`/api/articles/${article_id}`, { inc_votes: parseInt(numOfVotes) })
    .then((article) => {
      return article.data.article;
    });
};

export const getCommentsById = (article_id) => {
  return ncnewsApi
    .get(`/api/articles/${article_id}/comments`)
    .then((comments) => {
      return comments.data.comments;
    });
};

export const patchCommentVotes = (comment_id, numOfVotes) => {
  return ncnewsApi
    .patch(`/api/comments/${comment_id}`, { inc_votes: parseInt(numOfVotes) })
    .then((comment) => {
      return comment.data.comment;
    });
};

export const postCommentByArticleId = (article_id, user, newComment) => {
  return ncnewsApi
    .post(`/api/articles/${article_id}/comments`, {
      username: user,
      body: newComment,
    })
    .then((comment) => {
      return comment.data.comment;
    })
    .catch((error) => {
      console.log(error);
    });
};
