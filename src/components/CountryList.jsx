// src/components/CountryList.jsx
import React, { useEffect, useState } from 'react';
import './CountryList.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="country-list">
      <h1>Country List</h1>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
