import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticlesByParams } from "../../Utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("article_id");
  const [orderBy, setOrderBy] = useState("DESC");
  const [searchParams, setSearchParams] = useSearchParams();
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticlesByParams(topic, searchParams).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topic, searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let params = {
      sort_by: sortBy,
      order_by: orderBy,
    };

    const newSearchParams = new URLSearchParams(params);
    return setSearchParams(newSearchParams);
  };

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <main className="articles-main">
      <h2 className="topic-header">{topic ? topic : "All Articles"}</h2>
      <section className="sort-dropdown">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="sort-dropdown-title" htmlFor="sort-by">
              Sort By:
            </label>

            <select
              id="sort-by"
              name="sort-by"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="article_id">Default</option>
              <option value="title">Article</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Comments</option>
              <option value="created_at">Date</option>
            </select>
          </div>
          <div>
            <label className="orderby-title" htmlFor="order-by">
              Order:
            </label>
            <select
              id="order-by"
              name="order-by"
              value={orderBy}
              onChange={(event) => setOrderBy(event.target.value)}
            >
              <option value="DESC">desc</option>
              <option value="ASC">asc</option>
            </select>
          </div>
          <button className="queries-submit-btn" type="submit">
            Search
          </button>
        </form>
      </section>
      <section>
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
