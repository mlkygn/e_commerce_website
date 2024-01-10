import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Head from "./Head";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <Head />
        <Search />
        <Navbar />
      </header>
    </>
  );
}

export default Header;
