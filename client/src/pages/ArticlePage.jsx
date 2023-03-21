import React, { useState, useEffect, useContext} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddComments from "../components/AddComments";
import { UserContext } from "../App";
import { Card, CardHeader, CardBody, CardFooter, Box } from '@chakra-ui/react'

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
    <Box>
      {articleInfo ? (
        <Card>
          <CardHeader textTransform="uppercase">{articleInfo.name}</CardHeader>
          <CardBody>
          {
            Object.keys(user).length > 0
          ? <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="1rem"
          >
            <Text fontSize="sm">{upvotes}</Text>
               <button onClick={upvoteArticle}>Upvote</button>
           </Box>
          : <Link to="/login">Log in to upvote</Link>
          }
          <p>{articleInfo.content}</p>
          <Box>
          <CardHeader>Comments</CardHeader>
          {
            articleInfo.comments.map((comment, key) => (
              <div key={key}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <hr/>
              </div>
            ))
          }
          <CardFooter>
          {
            Object.keys(user).length > 0
            ? <AddComments articleName={articleId} articleUpdate={setArticleInfo} />
            : <Link style={{fontSize: "2rem"}} to="/login">Log in to add comments</Link>
          }
          </CardFooter>
          </Box>
          </CardBody>
        </Card>
      ) : (
        <p>No article found</p>
      )}
    </Box>
  );
};

export default ArticlePage;
