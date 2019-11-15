import React, { Component } from "react";
import RegistrationForm from "../../components/RegForm/RegForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/homepage");
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
