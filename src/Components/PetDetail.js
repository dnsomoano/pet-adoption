import React, { Component } from "react";
import "../Stylings/PetDetail.css";
import petData from "../Data/pet.json";
import { Link } from "react-router-dom";

class PetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      pet: {}
    };
  }

  componentDidMount() {
    const totalPets = petData.petfinder.pets.pet;
    let petObject = {};
    totalPets.forEach(pet => {
      if (pet.name.$t.includes(this.state.name)) {
        petObject = pet;
      }
    });
    console.log(petObject);
    this.setState({
      pet: petObject
    });
    console.log(this.state.pet);
    console.log(typeof this.state.pet);
  }

  render() {
    return (
      <div>
        <section className="navigation">
          <section className="breadcrumbs">
            <Link to="/">
              <button>Home</button>
            </Link>
          </section>
          <section className="cart-container">
            {/* <button className="cart-button" disabled>
              {this.state.pets.length}
            </button> */}
          </section>
        </section>
        <section className="detail-body">
          <img src="http://placekitten.com/200/300" alt="pet-name" />
          <section>
            <header>Pet name</header>
            <h1>Breed</h1>
            <section>Details about pet</section>
          </section>
        </section>
      </div>
    );
  }
}

export default PetDetail;
