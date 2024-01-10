import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../components/mainpage/Home";

function Pages() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default Pages;
