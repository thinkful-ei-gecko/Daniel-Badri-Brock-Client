import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AdoptionPage.css';
import PetApiService from '../../services/pet-api-service';
import DisplayAnimal from '../DisplayAnimal/DisplayAnimal'

export default class AdoptionPage extends Component {
  state = {
    dogs: [],
    cats: [],
    cats2: [],
  };
  componentDidMount() {
    PetApiService.getDogs().then(res => this.setState({ dogs: res }));
    PetApiService.getCats().then(res => this.setState({ cats: res }));
  }
  //   renderCats() {
  //     if (this.state.cats.length !== 0) {
  //         let cat = this.state.cats

  //         let cats = []
  //         cats.push(cat)

  //         while (cat.next !== null){
  //           cat = cat.next
  //           cats.push(cat)
  //         }
  //     return (cats.map(cat => {
  //         <div>
  //             {cat.value.name}
  //         </div>
  //         }
  //     ))}
  //   }
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
         return <DisplayAnimal animal={dog.value}/>
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
         return <DisplayAnimal animal={cat.value}/>
      });
    }
  }

  render() {
    let {cats, dogs} = this.state
    return (
        <div>
      {this.renderDogs()}
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