import { useEffect, useState } from "react";
import Industry from "../Industry/Industry";


const Industries = () => {

  const [industries, setIndustries] = useState([]);
  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setIndustries(data))
  }, [])

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-center font-bold text-3xl text-indigo-600">You can visit our Industry</h2>
      <div className="flex flex-wrap gap-16 justify-center py-8">
        {
          industries.map(industry => <Industry key={industry.id} industry={industry}></Industry>)
        }
      </div>
    </div>
  );
};

export default Industries;