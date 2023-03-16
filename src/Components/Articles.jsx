import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topic]);

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <main className="articles-main">
      <section>
        <h2 className="topic-header">{topic ? topic : "All Articles"}</h2>
        <ul className="articles">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Articles;
