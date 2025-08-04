import React, { useEffect, useState } from "react";
import axios from "axios";

function StatsPanel({ country, setCountry }) {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${country}`;
      const res = await axios.get(url);
      setData(res.data);
    };

    const fetchCountries = async () => {
      const res = await axios.get("https://disease.sh/v3/covid-19/countries");
      setCountries(res.data);
    };

    fetchData();
    fetchCountries();
  }, [country]);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Disease Tracker</h1>
      <div className="flex justify-center mb-6">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 border rounded-md w-64"
        >
          <option value="worldwide">Worldwide</option>
          {countries.map((c) => (
            <option key={c.countryInfo._id} value={c.country}>
              {c.country}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold">Total Cases</h3>
          <p className="text-blue-700 text-xl">{data.cases?.toLocaleString()}</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold">Total Deaths</h3>
          <p className="text-red-700 text-xl">{data.deaths?.toLocaleString()}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold">Recovered</h3>
          <p className="text-green-700 text-xl">{data.recovered?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;
