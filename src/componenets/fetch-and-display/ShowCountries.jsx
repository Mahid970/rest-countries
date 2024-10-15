import { useState } from "react";

const ShowCountries = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  const isVisited = () => {
    setVisited(!visited);
  };

  const { flags, name, population } = country;
  return (
    <div className={`${visited ? "bg-green-200" : "bg-red-200"} py-4`}>
      <img className="flex mx-auto" src={flags.png} alt="" />
      <h1 className="text-xl">Name: {name.common}</h1>
      <p>population: {population}</p>

      <button
        onClick={() => {
          handleVisitedCountry(country), isVisited();
        }}
        className="mt-12 mx-4"
      >
        Mark As Visited
      </button>
    </div>
  );
};

export default ShowCountries;
