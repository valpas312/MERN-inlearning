import React, { useState, useEffect, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddComments from "../components/AddComments";
import { UserContext } from "../App";

const ArticlePage = () => {

  const [user, setUser] = useContext(UserContext);

  const [articleInfo, setArticleInfo] = useState();

  const [upvotes, setUpvotes] = useState();

  const { articleId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/articles/${articleId}`
      );
      setArticleInfo(result.data);
      setUpvotes(result.data.upvotes);
      console.log(result.data);
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
          {
            Object.keys(user).length > 0
          ? <div>
            <p>{upvotes}</p>
               <button onClick={upvoteArticle}>Upvote</button>
           </div>
          : <Link to="/login">Log in to upvote</Link>
          }
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
            Object.keys(user).length > 0
            ? <AddComments articleName={articleId} articleUpdate={setArticleInfo} />
            : <Link to="/login">Log in to add comments</Link>
          }
        </>
      ) : (
        <p>No article found</p>
      )}
    </>
  );
};

export default ArticlePage;
