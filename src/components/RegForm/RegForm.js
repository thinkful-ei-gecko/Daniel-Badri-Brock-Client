import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
/* import AuthApiService from "../../services/auth-api-service";
 */
export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  /* handleSubmit = ev => {
    ev.preventDefault();
    const { username, fullname, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      fullname: fullname.value,
      username: username.value,
      password: password.value
    })
      .then(user => {
        username.value = "";
        fullname.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  }; */

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
            id="RegistrationFormFullName"
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
            id="RegistrationFormEmail"
          ></Input>
        </div>
        <Button type="submit" className="RegisterButton">Register</Button>
      </form>
    );
  }
}
