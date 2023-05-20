import React, { useContext } from "react";
import Rating from "react-rating";
import { FaRegStar,FaStar  } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/authProvider/authProvider";


const TractorsCar = ({tractor}) => {
    const {user} =useContext(AuthContext)
    const {_id, pictureUrl, name, price, rating} = tractor;


 

    
  return (
    <div className="my-10">
      <div className="card card-compact m-auto w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-72"
            src={pictureUrl}
            alt="car picture"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl text-left">Price: ${price}</p>
          <p className="text-xl text-left flex gap-2 ">Ratings:
          
          <span className="mt-1 text-yellow-600"><Rating
               placeholderRating={rating}
               emptySymbol={<FaRegStar></FaRegStar>}
               placeholderSymbol={<FaStar></FaStar>}
               fullSymbol={<FaStar></FaStar>}
               readonly
            >
            </Rating></span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/car-details/${_id}`}  className="btn bg-[#E74646] border-none">View details</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractorsCar;
