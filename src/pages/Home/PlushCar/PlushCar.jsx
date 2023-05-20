import React from "react";

const PlushCar = () => {
  return (
    <div className="grid md:grid-cols-2 mx-5 items-center gap-4">
      <div className="md:ml-20 space-y-5 mb-2">
        <h1 className="text-5xl font-bold">Plush Stunning Sports Car Elegance</h1>
        <p className="text-xl">Speed, power, elegance, precision, adrenaline, luxury, craftsmanship, innovation, <br /> performance, exclusivity.</p>
        <button className="btn bg-[#E74646] border-none">Buy Now</button>
      </div>
      <div>
        <img
            className="rounded-lg h-96"
          src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default PlushCar;
