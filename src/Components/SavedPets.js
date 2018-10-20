import React, { Component } from "react";
import petData from "../Data/pet.json";

class SavedPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    // console.log(petData);
    // petData.petfinder.pets.pet.name.$t
  }

  // push value to local storage
  getFromStorage = () => {
    let savedPets = localStorage.getItem("petsForAdoption").split(",");
    console.log(savedPets);
    console.log(typeof savedPets);
    this.setState({
      cart: savedPets
    });
    console.log(this.state.cart);
  };

  render() {
    return (
      <section className="pet-container">
        {/* {this.state.pets.map((pet, i) => {
          return (
            <section className="pet-item" key={i}>
              <header className="pet-name">{pet.name.$t}</header>
              <img src={pet.media.photos.photo[2].$t} alt="pet-pics" />
              <section className="button-container">
                <button
                  onClick={() => {
                    console.log(pet.name.$t);
                    this.addToStorage(pet.name.$t);
                  }}
                  className="button-style"
                >
                  Save for Later! arf!
                </button>
              </section>
            </section>
          );
        })} */}
      </section>
    );
  }
}

export default SavedPets;
