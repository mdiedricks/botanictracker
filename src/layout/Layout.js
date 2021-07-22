import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header
        isLoggedIn={props.isLoggedIn}
        setIsLoggedIn={props.setIsLoggedIn}
        user={props.user}
        setUser={props.setUser}
      />
      <div className={"main-wrap"}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
