import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { StateContext } from "./App";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const paymentContext = useContext(StateContext);

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //generate the specail stripe secret which allow us to charge the sutomer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expects the total ijn a currencies in subunit
        url: `/payments/create?total=${getBasketTotal(paymentContext.basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [paymentContext.basket]);

  const handleSubmit = async (event) => {
    //stripe function
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //desctructered responese
        //paymentIntent= payment confimation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("./orders");
      });
  };
  const handleChange = (event) => {
    //listeen for changes in cardElement
    //and dispklay any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout ({<Link to="/checkout">{paymentContext.basket?.length} items</Link>})</h1>

        {/* Payment section delivery adress */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{paymentContext.user?.email}</p>
            <p>123 React Lane</p>
            <p>Tokyo, Japan</p>
          </div>
        </div>

        {/* review Items */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {paymentContext.basket.map((item) => (
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

        {/* Payment method */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe worksss */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(paymentContext.basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
