import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Product from "./components/Products/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
