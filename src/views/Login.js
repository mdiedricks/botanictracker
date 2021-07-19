import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  let history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
    const response = await axios({
      method: "post",
      url: "https://botanictracker-api.herokuapp.com/users/login",
      data: {
        email: formData.email,
        password: formData.password,
      },
    });

    localStorage.setItem("token", response.data.token);
    props.logIn();
    props.updateUser(response.data.user);
    props.setIsLoggedIn(true);
    history.push("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input
          type="text"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="password"
          value={formData.password}
          onChange={changeHandler}
        />

        <button onClick={loginSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
