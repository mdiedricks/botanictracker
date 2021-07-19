import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const response = await axios({
      method: "post",
      url: "https://botanictracker-api.herokuapp.com/users/login",
      data: {
        email,
        password,
      },
    });

    localStorage.setItem("token", response.data.token);
    props.logIn();
    props.updateUser(response.data.user);
    props.setIsLoggedIn(true);
    history.push("/");
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeHandler = (e) => {};

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="email"
          value={email}
          onChange={emailHandler}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={passwordHandler}
        />

        <button onClick={loginSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
