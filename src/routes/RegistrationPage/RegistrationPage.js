import React, { Component } from "react";
import RegistrationForm from "../../components/RegForm/RegForm";
import TokenService from '../../services/token-service'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    TokenService.saveAuthToken(TokenService.makeBasicAuthToken(user))
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
