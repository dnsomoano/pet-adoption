import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import IndexPage from "./Components/IndexPage";
import SavedPets from "./Components/SavedPets";
import PetDetail from "./Components/PetDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/" className="link-style">
            <header className="main-header">Pets for Adoption</header>
          </Link>
          <Switch>
            <Route
              path="/" // render={props => <IndexPage {...props} cart={this.state.cart} />}
              exact
              component={IndexPage}
            />
            <Route path="/pet/:name" exact component={PetDetail} />
            <Route
              path="/cart/:cart"
              exact
              component={
                SavedPets // render={props => <SavedPets {...props} cart={this.state.cart} />}
              }
            />
          </Switch>
          <a href="https://github.com/dnsomoano">
            <footer id="dev-footer">® Created by Daniel N Somoano</footer>
          </a>
        </div>
      </Router>
    );
  }
}

export default App;
