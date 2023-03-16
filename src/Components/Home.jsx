import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Utils/api";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  const singleArticle = articles.filter((article) => article.article_id === 34);

  let date = new Date(singleArticle.created_at);
  date = date.toLocaleString();

  console.log(singleArticle);

  return isLoading ? (
    <section>
      <h2 className="loading-header">Loading...</h2>
    </section>
  ) : (
    <main className="home-main">
      <section>
        <h2 className="home-header">Top Stories</h2>
        <section>
          <article>
            <Link to={`/articles/${singleArticle[0].article_id}`}>
              <figure className="home-figure">
                <img
                  src={singleArticle[0].article_img_url}
                  alt={singleArticle[0].title}
                  id="single-article-img"
                />
                <figcaption>
                  <p className="single-article-topic">
                    {singleArticle[0].topic}
                  </p>
                  <h3>{singleArticle[0].title}</h3>
                  <p>By: {singleArticle[0].author}</p>
                  <p>{date}</p>
                </figcaption>
              </figure>
            </Link>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Home;
