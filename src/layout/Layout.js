import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { isLoggedIn, toggleLogin, updateUser, user } = props;

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
        user={user}
        updateUser={updateUser}
      />
      <div className={"main-wrap"}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
