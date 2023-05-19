import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const {id} = useParams();
  const [toy, setToy] = useState(null);

  const handleUpdateToyWithForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const pictureUrl = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;

    const UpdateToy = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };

    fetch(`https://glaze-car-server.vercel.app/update-toy/${toy?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Success!",
            text: "Successfully updated your Toy",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  useEffect(() => {
    fetch(`https://glaze-car-server.vercel.app/car-details/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, []);
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold md:mb-5">
                Update Your Toy
              </h2>
              <form onSubmit={handleUpdateToyWithForm}>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    defaultValue={toy?.name}
                    placeholder="Toy Name"
                    name="name"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    defaultValue={toy?.sellerName}
                    placeholder="Seller Name"
                    name="sellerName"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    defaultValue={toy?.sellerEmail}
                    placeholder="Seller Email"
                    readOnly
                    name="sellerEmail"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    defaultValue={toy?.subCategory}
                    placeholder="Sub Category"
                    name="subCategory"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    defaultValue={toy?.price}
                    placeholder="Price"
                    name="price"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />

                  <input
                    type="text"
                    defaultValue={toy?.rating}
                    placeholder="Rating"
                    name="rating"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    defaultValue={toy?.availableQuantity}
                    placeholder="Available Quantity"
                    name="quantity"
                    className=" mb-2 input input-bordered w-full max-w-lg"
                  />

                  <input
                    type="text"
                    defaultValue={toy?.pictureUrl}
                    placeholder="Photo URL"
                    name="photo"
                    className=" mb-2 input input-bordered w-full max-w-lg"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <textarea
                    placeholder="Toy Description"
                    defaultValue={toy?.description}
                    name="description"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xxl md:mx-8"
                  ></textarea>
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    className="btn btn-wide "
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
