import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Hello From Country Section</h1>
      <h1>Available Country: {countries.length}</h1>
      <div className="country">
        {countries.map((country) => (
          <Country key={country.name} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
