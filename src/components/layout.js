import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../App.css";

function Layout({ children }) {
  return (
    <>
      <Header className="container"></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
