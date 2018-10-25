import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartButton extends Component {
  constructor(props) {
    super(props);
    // let fromStorage = localStorage.getItem("petsForAdoption");
    // fromStorage = fromStorage ? fromStorage.split(",") : [];

    this.state = {
      cart: this.props.cart,
      count: this.props.count
    };
  }

  render() {
    return (
      <div>
        <Link to="/cart">
          <button className="cart-display">{this.state.count}</button>
        </Link>
      </div>
    );
  }
}

export default CartButton;
