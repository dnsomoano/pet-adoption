import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

  // componentDidMount() {
  //   let savedPets = ;
  //   console.log(savedPets);
  //   console.log(typeof savedPets);
  //   this.setState({
  //     cart: savedPets
  //   });
  //   console.log(this.state.cart);
  // }

  // getLocalStorage = (e) => {
  // };

  render() {
    let button = <button>Cart of 0</button>;
    if (this.state.cart) {
      button = (
        <button className="cart-display">
          Cart of {this.state.cart.length}
        </button>
      );
    }
    return (
      <Router>
        <div className="App">
          <header className="main-header">Pets for Adoption</header>
          <section className="cart-container">
            {/* <Link to="/cart"> */}
            {button}
            {/* </Link> */}
          </section>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/cart" exact component={SavedPets} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
