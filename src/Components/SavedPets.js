import React, { Component } from "react";
import "../Stylings/SavedPets.css";
import petData from "../Data/pet.json";
import { Link } from "react-router-dom";

class SavedPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.match.params.cart,
      pets: []
    };
  }

  componentDidMount() {
    const totalPets = petData.petfinder.pets.pet;
    let bucket = [];
    totalPets.forEach(pet => {
      if (this.state.cart.includes(pet.name.$t)) {
        bucket.push(pet);
      }
    });
    this.setState({
      pets: bucket
    });
    // Clear bucket after binding to state
    bucket = [];
  }

  // remove value from local storage and cart
  handleRemoveFromStorage = pet => {
    let bag = [];
    typeof this.state.cart === "object"
      ? (bag = this.state.cart)
      : (bag = this.state.cart.split(","));
    let index = bag.indexOf(pet);
    if (bag.includes(pet)) {
      localStorage.removeItem("petsForAdoption");
      bag.splice(index, 1);
      localStorage.setItem("petsForAdoption", bag);
    }
    this.setState({
      cart: bag
    });
  };

  // remove all pets from local storage and cart
  handleRemoveAll = () => {
    localStorage.removeItem("petsForAdoption");
    this.setState({
      cart: ""
    });
  };

  render() {
    return (
      <div className="cart-body">
        {/* TODO fix stretch difference from index page to cart page */}
        <section className="navigation">
          <section className="breadcrumbs">
            <Link className="breadcrumb-link" to="/">
              <button className="button-style">Home</button>
            </Link>
          </section>
          <section className="cart-container">
            <button className="cart-button" disabled>
              {this.state.pets.length}
            </button>
          </section>
        </section>
        <header className="cart-header">
          Cart of {this.state.pets.length}
        </header>
        <section className="pet-container">
          {this.state.pets.map((pet, i) => {
            return (
              <section className="pet-item" key={i}>
                <header className="pet-name">{pet.name.$t}</header>
                <img src={pet.media.photos.photo[2].$t} alt={pet.name.$t} />
                <section className="button-container">
                  {/* TODO rerender page after every onclick */}
                  <button
                    className="button-style"
                    onClick={() => {
                      this.handleRemoveFromStorage(pet.name.$t);
                    }}
                  >
                    Remove from Cart
                  </button>
                </section>
              </section>
            );
          })}
        </section>
        <section className="button-container">
          <button className="button-style" onClick={this.handleRemoveAll}>
            Clear Cart
          </button>
        </section>
      </div>
    );
  }
}

export default SavedPets;
