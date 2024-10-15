import { useEffect } from "react";
import { useState } from "react";
import ShowCountries from "./ShowCountries";

const LoadCountries = () => {
  const [data, setData] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleVisitedCountry = (newCountry) => {
    setVisitedCountry([...visitedCountry, newCountry]);
  };
  return (
    <div>
      <h2>Visited Country:{visitedCountry.length}</h2>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}
      </ol>
      <h1>All Countries {data.length}</h1>
      <div className="grid grid-cols-3 gap-8">
        {data.map((country) => (
          <ShowCountries
            key={country.cca2}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></ShowCountries>
        ))}
      </div>
    </div>
  );
};

export default LoadCountries;
