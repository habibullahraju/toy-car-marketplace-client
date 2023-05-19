import React, {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const threeItems = gallery.slice(10, 13);
  useEffect(() => {
    fetch("https://glaze-car-server.vercel.app/all-cars")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-right">
      <h2 className="text-center text-4xl font-bold mt-20">
        Our Most Popular Toys
      </h2>
      <p className="text-center my-6">
        Experience the thrill of the open road with our popular car-related
        articles, reviews, and automotive news.
      </p>
      <div className="md:flex justify-center  gap-5">
        {threeItems.map((gr) => (
          <div className="relative" key={gr._id}>
            <img
              className="mx-auto mb-4 w-96 h-80 object-cover rounded-md"
              src={gr?.pictureUrl}
              alt=""
            />
            <h3 className="absolute bottom-8  p-2 rounded-3xl text-white shadow-lg border cursor-pointer font-bold uppercase left-36 md:left-28">
              {gr?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
