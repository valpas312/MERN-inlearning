import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddComments from "../components/AddComments";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState();

  const [upvotes, setUpvotes] = useState();

  const { articleId } = useParams();

  const { loading, user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/articles/${articleId}`
      );
      setArticleInfo(result.data);
      setUpvotes(result.data.upvotes);
      console.log(result.data);
      console.log(upvotes);
    };
    fetchData();
  }, []);

  const upvoteArticle = async (e) => {
    e.preventDefault();
    const result = await axios.put(
      `http://localhost:3000/api/articles/${articleId}/upvote`
    );
    setUpvotes(result.data);
  };

  return (
    <>
      {articleInfo ? (
        <>
          <h1>{articleInfo.name}</h1>
          <div>
            <p>{upvotes}</p>
            {user ? (
              <button onClick={upvoteArticle}>Upvote</button>
            ) : (
              <p>Log in to upvote</p>
            )}
          </div>
          <p>{articleInfo.content}</p>
          <h3>Comments</h3>
          {
            articleInfo.comments.map((comment, key) => (
              <div key={key}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
              </div>
            ))
          }
          {
            user 
            ? <AddComments articleName={articleId} articleUpdate={setArticleInfo} />
            : <p>Log in to add comments</p>
          }
        </>
      ) : (
        <p>No article found</p>
      )}
    </>
  );
};

export default ArticlePage;
