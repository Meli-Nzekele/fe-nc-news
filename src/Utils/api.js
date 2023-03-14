import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://be-nc-news-q7oo.onrender.com",
});

export const getArticles = () => {
  return ncnewsApi.get("/api/articles").then((articles) => {
    return articles.data.articles;
  });
};

export const getArticlesById = (article_id) => {
  return ncnewsApi.get(`/api/articles/${article_id}`).then((article) => {
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

export const patchArticleVotes = (article_id, numOfVotes) => {
  return ncnewsApi
    .patch(`/api/articles/${article_id}`, { inc_votes: parseInt(numOfVotes) })
    .then((article) => {
      return article.data.article;
    });
};
