import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/Flash/FlashDeals";

function Pages({productItems}) {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} />
    </>
  );
}

export default Pages;
