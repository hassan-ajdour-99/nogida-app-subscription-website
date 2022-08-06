import React from "react";
import classes from "./Product.module.css";
import RatingItems from "../RatingItems/RatingItems";
import { dummy_data } from "../../data";

function Product() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}> All Products </h2>
      <div className={classes.cart}>
        {dummy_data.map((pro) => (
          <div className={classes.card}>
            <img
              src="/images/exterior_1.jpeg"
              alt="img"
              className={classes.image}
            />
            <h3 className={classes.name}> {pro.name} </h3>
            <p> 4 bathrooms </p>
            <p> Rating </p>
            <RatingItems />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
