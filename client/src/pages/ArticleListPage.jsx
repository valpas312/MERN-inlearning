import React, { useState, useEffect } from "react";
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
      <h1>Articles</h1>
      {
        articles
        ? articles.map((article) => {
          return (
            <div key={article._id}>
              <Link to={`/articles/${article.name}`}>
                <h3>{article.name}</h3>
              </Link>
              <p>{article.content.substring(0, 150)}...</p>
            </div>
          )
        })
        : <p>No articles yet</p>
      }
    </>
  );
};

export default ArticleListPage;
