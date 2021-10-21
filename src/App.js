import React, { useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import reducer, { initialState } from "./reducer";
import Login from "./Login";

export const StateContext = React.createContext();

function App() {
  const [{ basket }, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ basket: basket, dispatch: dispatch }}>
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
