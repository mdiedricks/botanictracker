import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginForm, setLoginForm] = useState(true);
  const history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
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

  const signupSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "https://botanictracker-api.herokuapp.com/users",
      data: {
        name: formData.name,
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

  const formToggler = () => {
    loginForm ? setLoginForm(false) : setLoginForm(true);
  };

  const loginText = () => {
    return (
      <>
        <h2>Login</h2>
        <p>
          Haven't signed up yet?{" "}
          <span className={"form-toggle-btn"} onClick={formToggler}>
            Sign up!
          </span>
        </p>
      </>
    );
  };
  const signupText = () => {
    return (
      <>
        <h2>Sign up to Botanic Tracker</h2>
        <p>
          Already have an account?{" "}
          <span className={"form-toggle-btn"} onClick={formToggler}>
            Sign in
          </span>
        </p>
      </>
    );
  };

  return (
    <main className={"container content center"}>
      <form>
        <div className={"form-title"}>
          {loginForm ? loginText() : signupText()}
        </div>
        {!loginForm && <label>Name</label>}
        {!loginForm && (
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={changeHandler}
          />
        )}
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
        {loginForm ? (
          <button className={"btn--prim btn--lrg"} onClick={loginSubmit}>
            Login
          </button>
        ) : (
          <button className={"btn--prim btn--lrg"} onClick={signupSubmit}>
            Signup
          </button>
        )}
      </form>
    </main>
  );
};

export default Login;
