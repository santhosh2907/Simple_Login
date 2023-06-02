import React, { useEffect, useState } from "react";
import {  useNavigate, redirect } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user') !== null){
            navigate("/")
        }
    }, [inputs])
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    
    console.log(inputs);
    // Storing user data in localStorage
    localStorage.setItem('user', JSON.stringify(inputs));
    console.log("Data from local storage", localStorage.getItem('user'))
    
  };
  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your Password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
