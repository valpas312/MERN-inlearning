import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import {Link as ChakraLink} from "@chakra-ui/react";
import { Tabs, TabList} from '@chakra-ui/react'

const NavBar = () => {

  const [user, setUser] = useContext(UserContext);

  return (
    <Tabs
      bg="blue.500"
      color="white"
      px={4}
      py={2}
      align="center"
      direction="row"
      justify="space-between"
    >
      <TabList
        align="center"
        direction="row"
        justify="space-between"
        width="100%"
        maxW="800px"
        gap="1rem"
      >
        <ChakraLink>
          <Link to="/">Home</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/about">About</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/articles">Articles</Link>
        </ChakraLink>
        <ChakraLink>
        {
          Object.keys(user).length > 0
          ? <button onClick={() => setUser({})}>Logout</button>
          : <Link to="/login">Login</Link>
        }
        </ChakraLink>
        {
          Object.keys(user).length > 0
          ? <p>Loged in as {user.name}</p>
          : <p>You are not loged in</p>
        }
      </TabList>
    </Tabs>
  );
};

export default NavBar;
