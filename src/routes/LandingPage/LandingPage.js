import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPageContainer">
        <h1>Welcome to Petful!</h1>
        <br />
        <p className="landingPageInto">
          Adopt pets that really need your love!
          <br />
          Register a new user and start by adding yourself to the Queue.
          <br />
          If you leave the site, decide you dont want to adopt, you will be
          removed from the queue and will be pushed to the back of the line!
          <br />
        </p>
        <br />
        <p></p>

        <p>
          <Link className="LandingPageLink" to="/register">
            Register
          </Link>{' '}
          to Adopt a Pet in need now!
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
