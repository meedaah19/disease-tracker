import { useState } from "react";
import StatsPanel from "../components/StatsPanel";
import Chart from "../components/Chart";

function Home() {
  const [country, setCountry] = useState("worldwide");

  return (
    <div className="p-4">
      <StatsPanel country={country} setCountry={setCountry} />
      <div className="mt-8">
        <Chart country={country} />
      </div>
    </div>
  );
}

export default Home;
