import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Badge, Box, Text} from "@chakra-ui/react";

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
      <Box
        bg="white"
        p="1rem"
        mt="1rem"
        display="flex"
        flexDirection="column"
        gap="1rem"
        juustify="center"
        align="center"
      >
      {
        articles
        ? articles.map((article) => {
          return (
            <Box key={article._id}>
              <Link to={`/articles/${article.name}`}>
                <Badge
                  colorScheme="green"
                >{article.name}</Badge>
              </Link>
              <Text
                fontSize="sm"
                color="gray.500"
              >{article.content.substring(0, 150)}...</Text>
            </Box>
          )
        })
        : <p>No articles yet</p>
      }
      </Box>
    </>
  );
};

export default ArticleListPage;
