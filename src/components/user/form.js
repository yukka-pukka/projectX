import React, { Component } from "react";
import firebase, { usersCollection } from "../../utils/firebase";
import UserContext from "../../UserContext";

class LoginForm extends Component {
  state = {
    register: false,
    user: {
      email: "",
      password: "",
    },
  };

  // event handler function
  handleForm = (e) => {
    e.preventDefault();
    const email = this.state.user.email;
    const password = this.state.user.password;

    if (this.state.register) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          // this.handleRegisterUser(user);
          this.context.setUser(response.user);
          this.props.history.push("/profile");

          response.user.sendEmailVerification().then(() => {
            console.log("email verification sent");
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response);
          this.context.setUser(response.user);
          this.props.history.push("/profile");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  // logs a customer out if they are logged in
  handleLogout = (e) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
          this.props.history.push("/", { message: "You have been signed out" })
        console.log("User logged out");
      });
  };

  handleGetUserInfo = () => {
    let getUser = firebase.auth().currentUser;
    if (getUser) {
      console.log(getUser);
    } else {
      console.log("No User");
    }
  };

  render() {
    return (
      <>
        <form onSubmit={(event) => this.handleForm(event)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(event) => this.changeHandler(event)}
            ></input>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={(event) => this.changeHandler(event)}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            {this.state.register ? "Register" : "Sign in"}
          </button>
        </form>
        <hr />
        <button onClick={() => this.handleLogout()}>Logout</button>
      </>
    );
  }
}

LoginForm.contextType = UserContext;

export default LoginForm;
