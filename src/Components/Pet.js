import React, { Component } from "react";
import petData from "../Data/pet.json";

class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    console.log(petData);
  }

  render() {
    return (
      <section className="pet-container">
        {this.state.pets.map((pet, i) => {
          return (
            <section className="pet-list" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[2].$t} alt="pet-pics" />
              <button>Save for Later! arf!</button>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Pet;
