import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./comp/common/protectedRoute";

import auth from "./services/authService";
import Movies from "./comp/movies";
import Customer from "./comp/customers";
import Rental from "./comp/rentals";
import NotFound from "./comp/notFound";
import NavBar from "./comp/common/navBAr";
import MovieForm from "./comp/moviesForms";
import LoginForm from "./comp/loginForm";
import Register from "./comp/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Logout from "./comp/common/logout";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <NavBar user={this.state.user} />

          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />

            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state} />}
            ></Route>
            <Route path="/customers" component={Customer}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
