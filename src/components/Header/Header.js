import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";

class Header extends Component {

  handleLogoutClick = ev => {
    ev.preventDefault();
    this.props.changeUser(null);
    TokenService.clearAuthToken();
    this.props.history.push("/login");
  };

  renderLogoutLink() {
    return (
      <section className="HeaderContainer">
        <nav className="NavHeader">
          <h1>
            <Link to="/">Petful</Link>
          </h1>
          <span className="HeaderTaglineWide">Adopt in Need.</span>
        </nav>
        <div className="HeaderLoggedInContainer">
          <Link to="/pets">
            <p>Pets</p>
          </Link>
        </div>
      </section>
    );
  }

  renderLoginLink() {
    return (
      <section className="HeaderContainer">
        <nav className="NavHeader">
          <h1>
            <Link to="/">Petful</Link>
          </h1>
          <span className="HeaderTaglineWide">Adopt in Need.</span>
        </nav>
        <div className="HeaderNotLoggedIn">
          <Link to="/register">Register</Link>
        </div>
        <div className="petsButton">
          <Link to="/pets">Pets</Link>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        <div className="Header">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </>
    );
  }
}

export default withRouter(Header);
