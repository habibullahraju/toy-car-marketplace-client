import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const CarDetails = () => {
  const {id} = useParams();
  const [car, setCar] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/car-details/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  console.log(car);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
