import { useState } from "react";

const ShowCountries = ({ country }) => {
  const [visited, setVisited] = useState(false);
  const isVisited = () => {
    setVisited(!visited);
  };

  console.log(country);
  const { flags, name, population } = country;
  return (
    <div className="card bg-gray-200 p-4 w-96">
      <img className="w-48 flex mx-auto" src={flags.png} alt="" />
      <h1 className="text-xl">Name: {name.common}</h1>
      <p>population: {population}</p>
      <button onClick={isVisited}>{visited ? "visited" : "Not Visited"}</button>
      <button className="mt-12 mx-4">Details</button>
    </div>
  );
};

export default ShowCountries;
