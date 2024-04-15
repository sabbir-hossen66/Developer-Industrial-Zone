import { useEffect, useState } from "react";
import Industry from "../Industry/Industry";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Industries = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      offset: 100, // Offset (in px) from the top/bottom of an element to trigger animations
      once: true // Whether animations should only happen once
    });
  }, []);

  const [industries, setIndustries] = useState([]);
  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setIndustries(data))
  }, [])

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-center font-bold text-3xl text-indigo-600">You can visit our Industry</h2>
      <div data-aos="flip-left" className="flex flex-wrap gap-16 justify-center py-8">
        {
          industries.map(industry => <Industry key={industry.id} industry={industry}></Industry>)
        }
      </div>
    </div>
  );
};

export default Industries;