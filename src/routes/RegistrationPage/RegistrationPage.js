import React, { Component } from "react";
import RegistrationForm from "../../components/RegForm/RegForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    localStorage.setItem("id", user.id)
    const { history } = this.props;
    history.push("/pets");
  };

  render() {
    return (
      <div className="RegistrationPage">
        <h2>Register to Join Adoption Queue</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </div>
    );
  }
}
