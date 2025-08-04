import { useState } from "react";
import StatsPanel from "../components/StatsPanel";
import Chart from "../components/Chart";

function Home() {
  const [country, setCountry] = useState("worldwide");
  const [disease, setDisease] = useState("COVID-19");

  return (
    <div className="p-4">
      <StatsPanel 
      country={country} 
      setCountry={setCountry} 
      disease={disease} 
      setDisease={setDisease} />

      <div className="mt-8">
        <Chart 
        country={country}  
        disease={disease}  />
      </div>
    </div>
  );
}

export default Home;
