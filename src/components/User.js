import React, { Component } from "react";
import { store } from "../store";

class User extends Component {
  state = {};

  render() {
    console.log("store", store.getState().userName);
    return (
      <div className="text-center w-100">
        {store.getState().userName && (
          <h1>hello {store.getState().userName}</h1>
        )}
      </div>
    );
  }
}

export default User;
