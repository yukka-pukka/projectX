import React, { Component } from "react";
import Form from "./form";

class Login extends Component {
  render() {
    return <div><Form history={this.props.history}/>
      </div>;
  }
}

export default Login;
