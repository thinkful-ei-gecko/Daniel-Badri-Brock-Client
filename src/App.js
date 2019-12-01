import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import LandingPage from './routes/LandingPage/LandingPage';
import Homepage from './routes/HomePage/HomePage';
import TokenService from './services/token-service';
import './App.css';
import AdoptionPage from './routes/AdoptionPage/AdoptionPage';
import SuccessPage from './routes/SuccessPage/SuccessPage'
class App extends Component {
  state = {
    user: TokenService.getAuthToken(),
  };

  changeUser = user => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header user={this.state.user} changeUser={this.changeUser} />
        </header>
        <main>
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/register'} component={RegistrationPage} />
            <Route exact path={'/homepage'} component={Homepage} />
            <Route exact path={'/pets'} component={AdoptionPage} />
            <Route exact path={'/success'} component={SuccessPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
