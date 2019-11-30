import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AdoptionPage.css';
import PetApiService from '../../services/pet-api-service';
import DisplayAnimal from '../DisplayAnimal/DisplayAnimal';
import TokenService from '../../services/token-service';

export default class AdoptionPage extends Component {
  state = {
    dogs: [],
    cats: [],
    error: [],
    queue: [],
  };
  componentDidMount() {
    PetApiService.getLine().then(res => this.setState({ queue: res }));
    PetApiService.getCats().then(res => this.setState({ cats: res }));
    PetApiService.getDogs().then(res => this.setState({ dogs: res }));
  }

  handleAdoptCat() {
    if (TokenService.hasAuthToken()) {
      TokenService.clearAuthToken();
      PetApiService.adoptCat()
        .then(this.componentDidMount())
        .then(this.props.history.push('/pets'))
        .catch(error => {
          this.setState({ error: error });
        });
    } else window.alert('Must register in order to adopt');
  }

  handleAdoptDog() {
    if (TokenService.hasAuthToken()) {
      PetApiService.adoptDog()
        .then(() => {
          TokenService.clearAuthToken();
        })
        .then(this.componentDidMount())
        .then(this.props.history.push('/pets'))
        .catch(error => {
          this.setState(error);
          console.log(this.state.error);
        });
    } else window.alert('Must register in order to adopt');
  }

  renderQueue() {
    let { queue } = this.state;
    return queue.map(name => {
      if (name === TokenService.getAuthToken()) {
        return (
          <li key={name}>
            <span className="position">{name}</span> (You)
          </li>
        );
      }
      return <li key={name}>{name}</li>;
    });
  }

  renderDogs() {
    if (!this.state.dogs) {
      return <p>Sorry, no dogs</p>;
    }
    if (this.state.dogs.length !== 0) {
      let dog = this.state.dogs;

      let dogs = [];
      dogs.push(dog);

      while (dog.next !== null) {
        dog = dog.next;
        dogs.push(dog);
      }

      return dogs.map((dog, index) => {
        if (index === 0) {
          return (
            <div className="animal">
              <DisplayAnimal key={index} animal={dog.value} />
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
            </div>
          );
        }
        return <DisplayAnimal key={index} animal={dog.value} />;
      });
    }
  }

  renderCats() {
    if (!this.state.cats) {
      return <p>Sorry, no cats</p>;
    }
    if (this.state.cats.length !== 0) {
      let cat = this.state.cats;

      let cats = [];
      cats.push(cat);

      while (cat.next !== null) {
        cat = cat.next;
        cats.push(cat);
      }

      return cats.map((cat, index) => {
        if (index === 0) {
          return (
            <div className="animal">
              <DisplayAnimal key={index} animal={cat.value} />
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
            </div>
          );
        }
        return <DisplayAnimal key={index} animal={cat.value} />;
      });
    }
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
      </div>
    );
  }
}

// <div className='adoptionQ'>
// {this.state.cats.length === 0 ? (
//   <p> No cats!</p>
// ) : (
//   <div>
//     {/* {cats.map(cat =>
//             cat.value.name
//         )} */}
//   </div>
// )}
// </div>
// );
