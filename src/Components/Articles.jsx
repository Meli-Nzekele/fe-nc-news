import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <section>
      <h2>Loading...</h2>
    </section>
  ) : (
    <main>
      <section>
        <article>
          <ul className="articles">
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default Articles;
