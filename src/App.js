import React, { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import reducer, { initialState } from "./reducer";
import Login from "./Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

export const StateContext = React.createContext();

function App() {
  const [{ basket, user }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //will only run when the ap component loads

    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <StateContext.Provider value={{ basket: basket, user: user, dispatch: dispatch }}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />

              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
