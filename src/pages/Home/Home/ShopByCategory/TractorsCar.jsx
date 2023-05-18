import React from "react";

const TractorsCar = ({tractor}) => {
    const {pictureUrl} = tractor;
  return (
    <div className="my-10">
      <div className="card card-compact m-auto w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-72"
            src={pictureUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractorsCar;
