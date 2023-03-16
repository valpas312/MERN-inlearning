import React, { useState } from "react";
import axios from "axios";

const AddComments = ({articleName, articleUpdate}) => {
  const [name, setName] = useState("");
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
