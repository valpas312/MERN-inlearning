import React, { useState, useEffect } from "react";
import articles from "./article-content";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/articles");
      setArticles(result.data);
      console.log(result.data)
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article.name}>
          <Link to={`/articles/${article.name}`}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.content[0].substring(0, 100)}...</p>
        </div>
      ))} */}
    </>
  );
};

export default ArticleListPage;
