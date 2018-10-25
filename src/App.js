import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./Components/IndexPage";
import SavedPets from "./Components/SavedPets";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="main-header">Pets for Adoption</header>
          <Switch>
            <Route
              path="/"
              // render={props => <IndexPage {...props} cart={this.state.cart} />}
              exact
              component={IndexPage}
            />
            <Route
              path="/cart/:cart" // render={props => <SavedPets {...props} cart={this.state.cart} />}
              exact
              component={SavedPets}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
