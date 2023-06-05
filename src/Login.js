import React, { useEffect, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("simple_login_user") !== null) {
      navigate("/");
    }
  }, [inputs]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(inputs);
    // Storing user data in localStorage
    localStorage.setItem("simple_login_user", JSON.stringify(inputs));
    console.log(
      "Data from local storage",
      localStorage.getItem("simple_login_user")
    );
  };
  return (
    <>
      {/* <h2>Login Form</h2> */}
      {/* <form onSubmit=
      {handleSubmit}>
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
      </form> */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Username</label> <br />
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label> Password </label>
            <br />
            <input
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
