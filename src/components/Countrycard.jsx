import React from "react";

export default function Countrycard(props) {
  return (
    <div className="card">
      <img src={props.imgURL} />
      <div className="card-items">
      <p className="country-name">{props.name}</p>
      <p>Population:<span>{props.population}</span></p>
      <p>Region:<span>{props.region}</span></p>
      <p>Capital:<span>{props.capital}</span></p>
      </div>
    </div>
  );
}
