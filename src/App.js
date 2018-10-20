import React, { Component } from "react";
import "./App.css";
import Pet from "./Components/Pet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    let savedPets = localStorage.getItem("petsForAdoption").split(",");
    console.log(savedPets);
    console.log(typeof savedPets);
    this.setState({
      cart: savedPets
    });
    console.log(this.state.cart);
  }

  // getLocalStorage = (e) => {
  // };

  render() {
    return (
      <div className="App">
        <header className="main-header">Pets for Adoption</header>
        {/*  */}
        <nav>
          <ul>
            <li>Potential adoptees</li>
            <li>
              <header>Cart</header>
              <input
                className="cart-display"
                type="text"
                placeholder={this.state.cart.length}
              />
            </li>
          </ul>
        </nav>
        {/*  */}
        <Pet />
      </div>
    );
  }
}

export default App;
