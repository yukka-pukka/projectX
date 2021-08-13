import React, { Component } from "react";
import Form from "./form";

class Login extends Component {
  render() {
    return <Form history={this.props.history} />;
  }
}

export default Login;
