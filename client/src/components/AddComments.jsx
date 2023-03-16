import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";

const AddComments = ({articleName, articleUpdate}) => {

  const [user, setUser] = useContext(UserContext);

  const [name, setName] = useState(user.name);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:3000/api/articles/${articleName}/comments`, {
        username: name,
        text: comment
    });
    console.log(response);
    articleUpdate(response.data);
    setName("");
    setComment("");
  };
  return (
    <>
      <h3>Add Comments</h3>
      <form onSubmit={e => e.preventDefault()}>
        <span>Logged in as: {user.name}</span>
        <hr />
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default AddComments;
