import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AdoptionPage.css';
import PetApiService from '../../services/pet-api-service';
import DisplayAnimal from '../DisplayAnimal/DisplayAnimal'

export default class AdoptionPage extends Component {
  state = {
    dogs: [],
    cats: [],
  };
  componentDidMount() {
    PetApiService.getDogs().then(res => this.setState({ dogs: res }));
    PetApiService.getCats().then(res => this.setState({ cats: res }));
  }
  renderDogs() {
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
                <>
                    <DisplayAnimal key={index} animal={dog.value}/> 
                    <button>Adopt</button>
                </>
              )
          }
         return <DisplayAnimal key={index} animal={dog.value}/>
      });
    }
  }

  renderCats() {
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
              return (<>
              <DisplayAnimal key={index} animal={cat.value}/>
              <button>Adopt</button>
              </>
              )
          }
         return <DisplayAnimal key={index} animal={cat.value}/>
      });
    }
  }

  render() {

    return (
      <div>
          <h1>Dogs</h1>
        {this.renderDogs()}
        <h1>Cats</h1>
        {this.renderCats()}
      </div>
    )
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