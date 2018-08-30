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
  addToStorage = e => {
    const savedPets = this.state.pets.name.$t.concat(e)
    localStorage.setItem("petsForAdoption", savedPets);
    this.setState({
      cart: savedPets
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
              <button onClick={this.addToStorage} className="button-style">
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
