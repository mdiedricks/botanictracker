import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

function Layout(props) {
  return (
    <>
      <Header
        className="container"
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        user={props.user}
        setUser={props.setUser}
      ></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
