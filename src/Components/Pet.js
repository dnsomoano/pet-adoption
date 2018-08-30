import React, { Component } from "react";
import petData from "../Data/pet.json";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      cart: []
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    // console.log(petData);
  }

  // TODO push value to local storage
  addToStorage = (newPet) => {
    console.log(newPet)
    const savedPet = this.state.cart.slice("");
    savedPet.push(newPet)
    localStorage.setItem("petsForAdoption", savedPet);
    console.log(savedPet);
    this.setState({
      cart: savedPet
    });
  };

  render() {
    return (
      <section className="pet-container">
        {this.state.pets.map((pet, i) => {
          return (
            <section className="pet-item" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[2].$t} alt="pet-pics" />
              <button
                onClick={() => {
                  console.log(pet.name.$t)
                  this.addToStorage(pet.name.$t);
                }}
                className="button-style"
              >
                Save for Later! arf!
              </button>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Pet;
