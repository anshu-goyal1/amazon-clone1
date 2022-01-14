import React, { useContext } from "react";
import { StateContext } from "./App";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import "./Subtotal";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const checkoutContext = useContext(StateContext);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h3>Hello, {checkoutContext.user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {checkoutContext.basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
