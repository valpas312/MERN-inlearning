import Router from "./components/Router";
import { createContext, useState } from "react";
import { Box } from "@chakra-ui/react";

export const UserContext = createContext()

function App() {

const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={[user, setUser]}>
    <Box
    h="100vh"
    w="100%"
    bg="gray.500"
    color="white"
    >
      <Router/>
    </Box>
    </UserContext.Provider>
  );
}

export default App;
