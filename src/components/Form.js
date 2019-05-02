import React, { Component } from "react";
import { store } from "../store";
import { setUser } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      passwordConfirm: "",
      passwordValid: false,
      passwordSame: false,
      passwordValue: ["Please choose a password", "danger"]
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.passwordCheck();
    });
  };

  dispatchFormChange() {
    const name = this.state.userName;
    this.setState({ userName: "" });
    store.dispatch(setUser(name));
  }

  handleClick(event) {
    event.preventDefault();
    this.dispatchFormChange();
  }

  passwordCheck() {
    let passwordCount = 0;
    passwordCount += /(?=.*?[A-Z])/.test(this.state.password) ? 1 : 0;
    passwordCount += /^[^" "\n]+$/.test(this.state.password) ? 1 : 0;
    passwordCount += /(?=.*?[?\\$^+*|().])/.test(this.state.password) ? 1 : 0;
    passwordCount += /.{6,}/.test(this.state.password) ? 1 : 0;

    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ passwordSame: true });
    } else {
      this.setState({ passwordSame: false });
    }
    if (passwordCount <= 2) {
      this.setState({
        passwordValue: ["Password strength : very weak", "danger"]
      });
    } else if (passwordCount <= 3) {
      this.setState({ passwordValue: ["Password strength : weak", "warning"] });
    } else {
      this.setState({
        passwordValid: true,
        passwordValue: ["Password strength : strong", "success"]
      });
    }
    console.log(passwordCount);
  }

  render() {
    let buttonActive =
      this.state.passwordValid &&
      this.state.passwordSame &&
      this.state.userName;
    let passwordValue = this.state.passwordValue;

    return (
      <div>
        <ul className="list-group list-group-flush">
          <li
            className={"list-group-item text-center text-" + passwordValue[1]}
          >
            {passwordValue[0]}
          </li>
          {!this.state.passwordSame && this.state.password && (
            <li className="list-group-item text-center text-warning">
              Password re-typed must match password
            </li>
          )}
        </ul>
        <div className="form card-body">
          <input
            value={this.state.userName}
            name="userName"
            onChange={event => this.handleChange(event)}
            type="Name"
            className="form-control my-2"
            id="userName"
            placeholder="Pick a Name"
          />
          <input
            type="password"
            className="form-control my-2"
            name="password"
            placeholder="Choose a password"
            onChange={event => this.handleChange(event)}
          />
          <input
            type="password"
            className="form-control my-2"
            name="passwordConfirm"
            aria-describedby="emailHelp"
            placeholder="Confirm password"
            onChange={event => this.handleChange(event)}
          />
          <button
            onClick={event => this.handleClick(event)}
            className="btn btn-primary w-100"
            disabled={!buttonActive}
          >
            Join Us !
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
