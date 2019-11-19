import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

class Header extends Component {
  state = {
    users: [
      {
        name: 'Steven'
      },
      {
        name: 'Joey'
      },
      {
        name: 'Anna'
      },
      {
        name: 'Dave'
      },
      {
        name: 'You'
      }
    ],
    userPlaceInLine: 0
  };
  componentDidMount() {
    AuthApiService.getUsers().then(res => this.setState({ users: res }));
  }

  /* getUserPlaceInLine(user) {
    let currentPosition = this.state.users;
    let count = 0;
    console.log(currentPosition.next);
    if (this.state.users !== []) {
      while (currentPosition !== user) {
        count++;
        if (currentPosition === user) {
          console.log(count);
          return count;
        }
        currentPosition = currentPosition.next;
      }
    } 
    return 0;
  } */

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
          <p>
            Your position in the Queue is:{" "}
            {/* {this.getUserPlaceInLine(this.props.user)} */}
          </p>
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
