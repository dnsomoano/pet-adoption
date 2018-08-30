import React, { Component } from "react";
import "./App.css";
import Pet from "./Components/Pet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">Pets for Adoption</header>
        {/*  */}
        <nav>
          <ul>
            <li>Potential adoptees</li>
            {/* TODO display array length from the key value cart (... in child) */}
            <li>
              <button>View all pets</button>
              <input type="text" placeholder="pets" />
            </li>
          </ul>
        </nav>
        {/*  */}
        <Pet />
      </div>
    );
  }
}

export default App;
