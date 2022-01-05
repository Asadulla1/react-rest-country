import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, capital, population, flag } = props.country;
  return (
    <div className="container">
      <h1>This is: {name}</h1>
      <h2>Capital: {capital}</h2>
      <h3>Population: {population}</h3>
      <img src={flag} alt="" />
    </div>
  );
};

export default Country;
