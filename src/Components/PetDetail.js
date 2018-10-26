import React, { Component } from "react";
import "../Stylings/PetDetail.css";
import petData from "../Data/pet.json";
import { Link } from "react-router-dom";

class PetDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      pet: []
    };
  }

  componentDidMount() {
    const totalPets = petData.petfinder.pets.pet;
    let petDetails = [];
    totalPets.forEach(pet => {
      if (pet.name.$t.includes(this.state.name)) {
        petDetails.push(pet);
      }
    });
    console.log(petDetails);
    this.setState({
      pet: petDetails
    });
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
        {this.state.pet.map((detail, i) => {
          /* TODO map over if breeds is a breed array */
          // if (detail.breeds.$t > 1) {
          //   detail.breeds.map((breed, i) => {
          //     return (
          //     <h1>{detail.name.$t}</h1>
          //     <header key={i}>{breed.breed.$t}</header>
          //     );
          //   });
          // } else {
          return (
            <section className="detail-body" key={i}>
              {/* TODO map over media.photos array */}
              <img
                className="pet-headshot"
                src={detail.media.photos.photo[2].$t}
                alt={detail.name.$t}
              />
              <section className="pet-details">
                <h1>{detail.name.$t}</h1>
                <header>{detail.age.$t}</header>
                {/* <header>{detail.breeds.breed[0].$t}</header> */}
                {/* TODO map over contact object */}
                {/* <section>
                
                  {Object.values(detail.contact).map(info => {
                    return <section>{info}</section>;
                  })}
                </section> */}
                <section className="pet-description">
                  {detail.description.$t}
                </section>
              </section>
            </section>
          );
          // }
        })}
      </div>
    );
  }
}

export default PetDetail;
