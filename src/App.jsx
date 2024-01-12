import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";

import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";

function App() {

  const { productItems } = Data
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Pages productItems={productItems} />} />
      </Routes>
    </>
  );
}

export default App;
