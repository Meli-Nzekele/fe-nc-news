import axios from "axios";

const ncnewsApi = axios.create({
  baseURL: "https://be-nc-news-q7oo.onrender.com",
});

export const getArticles = () => {
  return ncnewsApi.get("/api/articles").then((articles) => {
    return articles.data.articles;
  });
};
