import React from "react";
import articles from "./article-content";
import { Link } from "react-router-dom";

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.name}>
          <Link to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.content[0].substring(0, 100)}...</p>
        </div>
      ))}
    </>
  );
};

export default ArticleListPage;
