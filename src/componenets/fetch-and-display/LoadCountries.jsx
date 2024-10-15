import { useEffect } from "react";
import { useState } from "react";
import ShowCountries from "./ShowCountries";

const LoadCountries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>All Countries {data.length}</h1>
      <div className="grid grid-cols-3 gap-8">
        {data.map((country) => (
          <ShowCountries key={country.cca2} country={country}></ShowCountries>
        ))}
      </div>
    </div>
  );
};

export default LoadCountries;
