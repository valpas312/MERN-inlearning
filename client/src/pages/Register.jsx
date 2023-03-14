import axios from "axios";
import React, { useState, useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [idusuario, setIdusuario] = useState(Math.floor(Math.random() * 1000));

  function handleSubmit(e) {
    e.preventDefault();

    setIdusuario(Math.floor(Math.random() * 1000));

    axios
      .post("https://users-app-two.vercel.app/api/usuario/agregar", {
        name,
        email,
        password,
        idusuario,
      })
      .then(() => {
        alert("Usuario agregado");
      })
      .catch((err) => {
        alert("Error al agregar usuario");
        console.log(err);
      });
  }

  return (
    <>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </>
  );
};

export default Register;
