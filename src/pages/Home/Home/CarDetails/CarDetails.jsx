import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const CarDetails = () => {
  const {id} = useParams();
  const [car, setCar] = useState(null);
//   const { name, sellerName, sellerEmail, subCategory, price, availableQuantity,description, rating} = car;


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
            src={car?.pictureUrl}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{car?.name}</h1>
            <div className="py-6 text-xl space-y-2">
              <p><span className="font-semibold mr-1">Seller Name:</span>{car?.sellerName}</p>
              <p><span className="font-semibold mr-1">Seller Email:</span>{car?.sellerEmail}</p>
              <p><span className="font-semibold mr-1">Sub Category:</span>{car?.subCategory}</p>
              <p><span className="font-semibold mr-1">Price:</span>{car?.price}</p>
              <p><span className="font-semibold mr-1">Rating:</span>{car?.rating}</p>
              <p><span className="font-semibold mr-1">Available Quantity:</span>{car?.availableQuantity}</p>
              <p><span className="font-semibold mr-1">Car Description:</span> {car?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
