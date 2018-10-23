import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import IndexPage from "./Components/IndexPage";
import SavedPets from "./Components/SavedPets";

class App extends Component {
  constructor(props) {
    super(props);

    let fromStorage = localStorage.getItem("petsForAdoption");
    fromStorage = fromStorage ? fromStorage.split(",") : [];

    this.state = {
      cart: fromStorage
    };
  }

  render() {
    let button = <button>Cart of 0</button>;
    if (this.state.cart) {
      button = (
        <Link to="/cart">
          <button className="cart-display">
            Cart of {this.state.cart.length}
          </button>
        </Link>
      );
    }
    return (
      <Router>
        <div className="App">
          <header className="main-header">Pets for Adoption</header>
          <section className="cart-container">{button}</section>
          <Switch>
            <Route
              path="/"
              render={props => <IndexPage {...props} cart={this.state.cart} />}
            />
            <Route
              path="/cart" // render={props => <SavedPets {...props} cart={this.state.cart} />}
              exact
              component={SavedPets}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
