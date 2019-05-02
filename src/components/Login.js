import React, { Component } from "react";
import { store } from "../store";
import Form from "./Form";
import User from "./User";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="card w-100">
        <div className="card-header text-center">Join us at Izberg !</div>
        <div>{store.getState().userName ? <User /> : <Form />}</div>
      </div>
    );
  }
}

export default Login;
