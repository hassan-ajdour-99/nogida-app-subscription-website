import React from "react";
import classes from "./HomePage.module.css";
import Product from "../Products/Product";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Showcase from "../Layout/Showcase";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Product />
      <Footer />
    </div>
  );
}

export default HomePage;
