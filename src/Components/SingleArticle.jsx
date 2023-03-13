import { useEffect, useState } from "react";
import { getArticlesById } from "../Utils/api";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    getArticlesById().then((articlesData) => {
      setSingleArticle(articlesData);
    });
  }, []);

  return (
    <ul className="articles">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
};

export default SingleArticle;
