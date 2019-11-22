import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

class Header extends Component {
  state = {
    users: [
    ],
  };

  componentDidMount() {
    AuthApiService.getUsers().then(res => this.setState({ users: res }));
  }

  parseUsersQueue(que){
    let currNode = que.value;
    let newArr = [];

    while(currNode !== null) {
      newArr.push(currNode);
      currNode = currNode.next.value;
    }
    return newArr;
  }

  handleLogoutClick = ev => {
    ev.preventDefault();
    this.props.changeUser(null);
    TokenService.clearAuthToken();
    this.props.history.push("/login");
  };

  renderLogoutLink() {
    console.log(this.parseUsersQueue(this.state.users))
    const userlist = this.state.users.map(user => user.name + ', ');
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
            Your position in the Queue is:{this.parseUsersQueue}
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
