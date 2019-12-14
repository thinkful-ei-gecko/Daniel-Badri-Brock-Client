import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { fullname, email } = ev.target;

    this.setState({ error: null });

    AuthApiService.postUser(
      fullname.value,
      email.value
    )
      .then(user => {
        fullname.value = "";
        email.value = "";
        this.props.onRegistrationSuccess(user);
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }; 

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="FullName">
          <label htmlFor="RegistrationFormFullName">
            Full name <Required />
          </label>
          <Input
            name="fullname"
            type="text"
            placeholder="Test User"
            required
            id="fullname"
          ></Input>
        </div>
        <div className="Email">
          <label htmlFor="RegistrationFormEmail">
            Email <Required />
          </label>
          <Input
            name="Email"
            type="email"
            placeholder="testuser"
            required
            id="email"
          ></Input>
        </div>
        <Button type="submit" className="RegisterButton">Register</Button>
      </form>
    );
  }
}
