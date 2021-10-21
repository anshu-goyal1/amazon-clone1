import React from "react";
import "./Product.css";
import { useContext } from "react";
import { StateContext } from "./App";

function Product({ id, title, image, price, rating }) {
  const stateContext = useContext(StateContext);
  console.log("this i basket>>>", stateContext.basket);

  const addToBasket = () => {
    stateContext.dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
