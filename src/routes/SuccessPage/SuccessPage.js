import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import '../LandingPage/LandingPage.css';

export default class SuccessPage extends Component {

  componentDidMount() {
    TokenService.clearAuthToken();
  }

  render() {
    return (
      <div className="LandingPageContainer">
        <h1>Congrats!</h1>
        <br />
        <p className="landingPageInto">
          Thank you for using Petful!
          <br />
          We wish you and your new best friend a lovely life together. 
          <br />
          If you would like to adopt another pet, simply click on the link below to add yourself to the queue. 
          <br />
        </p>


        <p>
          <Link className="LandingPageLink" to="/register">
            Register
          </Link>{' '}
          to adopt another pet!
        </p>
        <p className="CreatedBy">
          || Petful App Created by ||
          <br />
          <br />
          <span className="Brockb">
            Daniel Nichols - Brock Boutwell - Badri Narayana Tulsiram
          </span>
        </p>
      </div>
    );
  }
}

