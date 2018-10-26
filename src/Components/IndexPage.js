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
    let cartButton = <button />;
    this.state.cart.length === 0
      ? (cartButton = (
          <button className="cart-button" disabled>
            {this.state.cart.length}
          </button>
        ))
      : (cartButton = (
          <button className="cart-button button-style">
            {this.state.cart.length}
          </button>
        ));

    //     let buttonSection = <section>
    // this.state.cart.includes(this.state.pets.name.$t) ? (saveButton = (<button className="disabled-button-style" disabled>Save for Later! arf!</button>
    //   <button
    //     className="button-style"
    //     onClick={() => {
    //       this.handleRemoveFromStorage(pet.name.$t);
    //     }}
    //   >
    //     Remove from Cart
    //                 </button>)) : saveButton = (<button
    //     onClick={() => {
    //       this.handleAddToStorage(pet.name.$t);
    //     }}
    //     className="button-style"
    //   >
    //     Save for Later! arf!
    //                 </button>);
    return (
      <div>
        {/* TODO replace buttons with user-friendly icons */}
        <section className="cart-container">
          <Link className="breadcrumb-link" to={`/cart/${this.state.cart}`}>
            {cartButton}
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
