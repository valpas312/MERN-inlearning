import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {

  const [user, setUser] = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
        {
          Object.keys(user).length > 0
          ? <button onClick={() => setUser({})}>Logout</button>
          : <Link to="/login">Login</Link>
        }
        </li>
        {
          Object.keys(user).length > 0
          ? <li>Loged in as {user.name}</li>
          : <li>You are not loged in</li>
        }
      </ul>
    </nav>
  );
};

export default NavBar;
