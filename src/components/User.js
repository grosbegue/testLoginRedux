import React, { Component } from "react";
import { store } from "../store";

class User extends Component {
  state = {};

  render() {
    return (
      <div className="text-center w-100">
        {store.getState().userName && (
          <h1>Hello {store.getState().userName} !</h1>
        )}
      </div>
    );
  }
}

export default User;
