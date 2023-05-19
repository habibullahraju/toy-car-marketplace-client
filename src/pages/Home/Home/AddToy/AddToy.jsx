import React, {useContext} from "react";
import {AuthContext} from "../../../../provider/authProvider/authProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const {user} = useContext(AuthContext);

  const handleAddToyWithForm = (event) => {
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

    const newToy = {
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

    console.log(newToy);

    fetch("https://glaze-car-server.vercel.app/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          Swal.fire({
            title: "Success!",
            text: "Successfully added your Toy",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold md:mb-5">
                Add Your Toy
              </h2>
              <form onSubmit={handleAddToyWithForm}>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    placeholder="Toy Name"
                    name="name"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Seller Name"
                    name="sellerName"
                    defaultValue={user?.displayName}
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Seller Email"
                    defaultValue={user?.email}
                    readOnly
                    name="sellerEmail"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    placeholder="Sub Category"
                    name="subCategory"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />

                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    className=" mb-2 input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    type="text"
                    placeholder="Available Quantity"
                    name="quantity"
                    className=" mb-2 input input-bordered w-full max-w-lg"
                  />

                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className=" mb-2 input input-bordered w-full max-w-lg"
                  />
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <textarea
                    placeholder="Toy Description"
                    name="description"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xxl md:mx-8"
                  ></textarea>
                </div>
                <div className="md:flex justify-around md:mb-5">
                  <input
                    className="btn btn-wide "
                    type="submit"
                    value="Add Toy"
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

export default AddToy;
