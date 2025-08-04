// At the top of StatsPanel.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import localDiseases from "../data/diseases.json"; // Ensure this path is correct

function StatsPanel({ country, setCountry, disease, setDisease }) {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    // Load diseases: combine COVID-19 and local diseases
    const allDiseases = ["COVID-19", ...localDiseases.map((d) => d.name)];
    setDiseases(allDiseases);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (disease === "COVID-19") {
        const url =
          country === "worldwide"
            ? "https://disease.sh/v3/covid-19/all"
            : `https://disease.sh/v3/covid-19/countries/${country}`;
        const res = await axios.get(url);
        setData(res.data);

        const countriesRes = await axios.get("https://disease.sh/v3/covid-19/countries");
        setCountries(countriesRes.data);
      } else {
        const local = localDiseases.find((d) => d.name === disease);
        setData(local || {});
        setCountries([]);
      }
    };

    fetchData();
  }, [country, disease]);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Disease Tracker</h1>

      {/* Disease Dropdown */}
      <div className="flex justify-center mb-4">
        <select
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          className="p-2 border rounded-md w-64"
        >
          {diseases.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* Country Dropdown (only for COVID-19) */}
      {disease === "COVID-19" && (
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
      )}

      {/* Stats Cards */}
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
