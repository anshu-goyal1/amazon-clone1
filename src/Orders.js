import React, { useContext, useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { StateContext } from "./App";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
//console.log(doc.id, "=>", doc.data());
function Orders() {
  const [orders, setOrders] = useState([]);
  const ordersContext = useContext(StateContext);

  useEffect(() => {
    if (ordersContext.user) {
      const q = query(collection(db, "users", ordersContext.user?.uid, "orders"), orderBy("created", "desc"));

      const data = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setOrders((prev) => [...prev, { id: doc.id, data: doc.data() }]);
        });
      });
    } else {
      setOrders([]);
    }
  }, [ordersContext.user]);

  console.log(orders);
  return (
    <div className="order">
      <h1>Your Order</h1>
      {orders?.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
}

export default Orders;
