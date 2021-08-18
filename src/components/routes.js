import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import PrivateRoute from './PrivateRoute'

// components
import Header from "./header";
import Footer from "./footer";
import Map from "./Map";
import Review from "./reviews";
import Login from "./user/login";
import List from "./reviews/list";
import Profile from "./profile/index";
import PrivateRoute from "./privateroute";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main role="main" className="container myMain">
      <Switch>
        <Route exact path="/">{(props) => (
          <div>
          <h1>Home!</h1>
          <img src="/heart.jpg" className="image_style"/>
          {props.location.state && props.location.state.message && (
            <div className="alert alert-primary">{props.location.state.message}</div>
          )}
          </div>
        )}
        </Route>
        <Route exact path="/restaurants" component={Map} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reviews" component={Review} />
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);

export default Routes;
