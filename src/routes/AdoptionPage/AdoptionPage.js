import React, { Component } from 'react';
import './AdoptionPage.css';
import PetApiService from '../../services/pet-api-service';
import DisplayAnimal from '../DisplayAnimal/DisplayAnimal';
import TokenService from '../../services/token-service';
import {withRouter} from 'react-router-dom'

class AdoptionPage extends Component {
  state = {
    dogs: [],
    cats: [],
    queue: [],
    error: null,
  };

  componentDidMount() {
    PetApiService.getLine().then(res => this.setState({ queue: res }));
    PetApiService.getCats().then(res => this.setState({ cats: res }));
    PetApiService.getDogs().then(res => this.setState({ dogs: res }));
  }
  

  handleAdoptCat() {
    if (TokenService.hasAuthToken()) {
      PetApiService.adoptCat()
        .then(() => {
          this.props.history.push('/success');
        })
        .catch(error => {
          this.setState({error: error.error});
        });
    } else window.alert('Must register in order to adopt');
  }

  handleAdoptDog() {
    if (TokenService.hasAuthToken()) {
      PetApiService.adoptDog()
        .then(() => {
        this.props.history.push('/success')
        })
        .catch((error) => {
          this.setState({error: error.error})
        })
    } else window.alert('Must register in order to adopt');
  }

  renderQueue() {
    let { queue } = this.state;
    return queue.map(users => {
      if (parseInt(users.id) === parseInt(TokenService.getAuthToken())) {
        return (
          <li key={users.id}>
            <span className="position">{users.name}</span> (You)
          </li>
        );
      }
      return <li key={users.id}>{users.name}</li>;
    });
  }

  renderDogs() {
    let dogs = this.state.dogs;
    if (!dogs.length) {
      return <p>Sorry! We are out of dogs for adoption. Please check back soon!</p>;
    }

    return dogs.map((dog, index) => {
      if (index === 0) {
        return (
          <li key={dog.id} className="animal">
            <DisplayAnimal animal={dog} />
            {this.state.error ? (
              <span className="wait">{this.state.error}</span>
            ) : null}
            <button
              onClick={() => {
                this.handleAdoptDog();
              }}
            >
              Adopt
            </button>
          </li>
        );
      }
      return (
        <li key={dog.id}>
          <DisplayAnimal animal={dog} />
        </li>
      );
    });
  }

  renderCats() {
    let cats = this.state.cats;
    if (!cats.length) {
      return <p>Sorry! We are out of cats for adoption. PLease check back soon!</p>;
    }
    return cats.map((cat, index) => {
      if (index === 0) {
        return (
          <li key={cat.id} className="animal">
            <DisplayAnimal key={cat.id} animal={cat} />
            {this.state.error ? (
              <span className="wait">{this.state.error}</span>
            ) : null}

            <button
              onClick={() => {
                this.handleAdoptCat();
              }}
            >
              Adopt
            </button>
          </li>
        );
      }
      return (
        <li key={cat.id}>
          <DisplayAnimal animal={cat} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="queue">
          <h2>Now Serving</h2>
          <ul>{this.renderQueue()}</ul>
        </div>
        <h1>Dogs</h1>
        <div className="dogs">{this.renderDogs()}</div>
        <h1>Cats</h1>
        <div className="cats">{this.renderCats()}</div>
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

export default withRouter(AdoptionPage)