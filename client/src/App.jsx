import Router from "./components/Router";
import { createContext, useState } from "react";

export const UserContext = createContext()

function App() {

const [user, setUser] = useState({})

  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
      <Router/>
    </UserContext.Provider>
    </>
  );
}

export default App;
