import React from "react";
import { countCatsForQueue } from "../../helpers";
import config from "../../config";
import TokenService from "../../services/token-service";

export default class CollectionList extends React.Component {
  state = {
    cats: [],
    dogs: [],
    humans: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/cats`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/dogs`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/humans`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`
        }
      }),
    ])
      .then(([catsres, dogsres, humansres]) => {
        if (!catsres.ok)
          return catsres.json().then(e => Promise.reject(e));
        if (!dogsres.ok) 
          return dogsres.json().then(e => Promise.reject(e));
        if (!humansres.ok) 
          return humansres.json().then(e => Promise.reject(e));

        return Promise.all([catsres.json(), dogsres.json(), humansres.json()]);
      })
      .then(([cats, dogs, humans]) => {
        this.setState({ cats, dogs, humans });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    return (
      <div className="Petful-HomePage">
        <ul className="CollectionListNavList">
          {this.state.cats.map(cat => (
            <li key={cat.id}
                className="Cat-List"
                to={`/cats/${cat.id}`}
                catid={cat.id}
                title={cat.title}
              >
                {cat.title} Cats in Queue:   
                <span className="ItemListNavNumItems">
                  {countCatsForQueue(this.state.cats, cat.id)}{" "}
                </span>
            </li>
          ))}
        </ul>
        <div>
        {this.state.cats.map(cat => (
        <span className="ItemListNavNumItems">
          {countCatsForQueue(this.state.cats, cat.id)}{" "}
        </span>
        ))}
        </div>
      </div>
    );
  }
}
