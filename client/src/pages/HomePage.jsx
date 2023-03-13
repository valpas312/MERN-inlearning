import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return <>
    <h1>Home</h1>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/register">Register</Link>
  </>
};

export default HomePage;
