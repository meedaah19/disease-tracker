import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        country === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${country}`;
      const res = await axios.get(url);
      setData(res.data);
    };
    fetchData();
  }, [country]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Disease Tracker</h1>
      <select onChange={(e) => setCountry(e.target.value)} className="mt-4 p-2 border">
        <option value="worldwide">Worldwide</option>
        <option value="ng">Nigeria</option>
        <option value="us">United States</option>
        <option value="in">India</option>
        <option value="cn">China</option>
        <option value="gb">United Kingdom</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="za">South Africa</option>
        <option value="br">Brazil</option>
        <option value="jp">Japan</option>
        <option value="ru">Russia</option>
        <option value="au">Australia</option>
        <option value="ca">Canada</option>
      </select>

      <div className="mt-6">
        <p>Cases: {data.cases}</p>
        <p>Deaths: {data.deaths}</p>
        <p>Recovered: {data.recovered}</p>
      </div>
    </div>
  );
}

export default Home;
