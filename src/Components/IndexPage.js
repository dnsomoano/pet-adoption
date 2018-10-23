import React, { Component } from "react";
import "../Stylings/IndexPage.css";
import petData from "../Data/pet.json";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      cart: this.props.cart
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    // console.log(petData);
  }

  // push value to local storage
  addToStorage = newPet => {
    const bag = this.state.cart.concat(newPet);
    localStorage.setItem("petsForAdoption", bag);
    this.setState({
      cart: bag
    });
  };

  render() {
    return (
      <section className="pet-container">
        {this.state.pets.map((pet, i) => {
          if (this.state.cart.includes(pet.name.$t)) {
            return (
              <section className="pet-item" key={i}>
                <header className="pet-name">{pet.name.$t}</header>
                <img src={pet.media.photos.photo[2].$t} alt={pet.name.$t} />
                <section className="button-container">
                  <button className="disabled-button-style" disabled>
                    Save for Later! arf!
                  </button>
                </section>
              </section>
            );
          } else {
            return (
              <section className="pet-item" key={i}>
                <header className="pet-name">{pet.name.$t}</header>
                <img src={pet.media.photos.photo[2].$t} alt={pet.name.$t} />
                <section className="button-container">
                  <button
                    onClick={() => {
                      this.addToStorage(pet.name.$t);
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
    );
  }
}

export default IndexPage;
