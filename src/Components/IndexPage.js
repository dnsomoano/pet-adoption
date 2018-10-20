import React, { Component } from "react";
import "../Stylings/IndexPage.css";
import petData from "../Data/pet.json";

class IndexPage extends Component {
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

  // push value to local storage
  addToStorage = newPet => {
    console.log(newPet);
    // TODO comment next line to see if it matters
    const savedPet = this.state.cart.slice("");
    savedPet.push(newPet);
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
        })}
      </section>
    );
  }
}

export default IndexPage;
