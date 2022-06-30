import React from "react";
import axios from "axios";
import "./Cards-Style.css";
import { Link, useParams } from "react-router-dom";

export default class Cards extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://api.thedogapi.com/v1/breeds`).then(res => {
      const persons = res.data;
      console.log(persons);
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="hero-section">
        <div className="card-grid">
          {this.state.persons.map(person => (
            <Link key={person.id} className="card" to={`/cards/${person.id}`}>
              <div
                className="card__background"
                style={{ backgroundImage: `url(${person.image.url})` }}
              >
                <div className="card__content">
                  <p className="card__category">{person.origin}</p>
                  <h3 className="card__heading">{person.name}</h3>
                  <p className="card__category">{person.life_span}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
