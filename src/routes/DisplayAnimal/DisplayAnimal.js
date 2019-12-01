import React from 'react';
import './DisplayAnimal.css';

export default function DisplayAnimal(props) {
  let { animal } = props;

  return (
    <section key={animal.id} className="AnimalDisplay">
      <div>
        <h3>{animal.name}</h3>
      </div>
      <div className="image">
        <img
          className="image"
          src={animal.imageURL}
          alt={animal.imageDescription}
        />
      </div>
      <div className="info">
        <span>{animal.sex}</span>, <span>{animal.age}</span>,{' '}
        <span>{animal.breed}</span>
        <p>{animal.story}</p>
      </div>
    </section>
  );
}
