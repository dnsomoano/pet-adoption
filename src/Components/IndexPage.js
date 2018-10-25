import React, { Component } from "react";
import "../Stylings/IndexPage.css";
import { Link } from "react-router-dom";
import petData from "../Data/pet.json";

class IndexPage extends Component {
  constructor(props) {
    super(props);

    let fromStorage = localStorage.getItem("petsForAdoption");
    fromStorage = fromStorage ? fromStorage.split(",") : [];

    this.state = {
      cart: fromStorage,
      pets: []
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    // console.log(petData);
  }

  // add value to local storage and cart
  handleAddToStorage = pet => {
    const bag = this.state.cart.concat(pet);
    localStorage.setItem("petsForAdoption", bag);
    this.setState({
      cart: bag
    });
  };

  // remove value from local storage and cart
  handleRemoveFromStorage = pet => {
    const bag = this.state.cart;
    let index = this.state.cart.indexOf(pet);
    if (bag.includes(pet)) {
      localStorage.removeItem("petsForAdoption");
      bag.splice(index, 1);
      localStorage.setItem("petsForAdoption", bag);
    }
    this.setState({
      cart: bag
    });
    console.log(this.state.cart);
  };

  render() {
    return (
      <div>
        {/* TODO disable button when cart is 0 and button needs styling. */}
        <section className="cart-container">
          <Link to={`/cart/${this.state.cart}`}>
            <button className="cart-button">{this.state.cart.length}</button>
          </Link>
        </section>
        <section className="pet-container">
          {this.state.pets.map((pet, i) => {
            if (this.state.cart.includes(pet.name.$t)) {
              return (
                <section className="pet-item" key={i}>
                  <header className="pet-name">{pet.name.$t}</header>
                  <Link to={`/pet/${pet.name.$t}`}>
                    <img src={pet.media.photos.photo[2].$t} alt={pet.name.$t} />
                  </Link>
                  <section className="button-container">
                    <button className="disabled-button-style" disabled>
                      Save for Later! arf!
                    </button>
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
            } else {
              return (
                <section className="pet-item" key={i}>
                  <header className="pet-name">{pet.name.$t}</header>
                  <Link to={`/pet/${pet.name.$t}`}>
                    <img src={pet.media.photos.photo[2].$t} alt={pet.name.$t} />
                  </Link>
                  <section className="button-container">
                    <button
                      onClick={() => {
                        this.handleAddToStorage(pet.name.$t);
                      }}
                      className="button-style"
                    >
                      Save for Later! arf!
                    </button>
                  </section>
                </section>
              );
            }
          })}
        </section>
      </div>
    );
  }
}

export default IndexPage;
