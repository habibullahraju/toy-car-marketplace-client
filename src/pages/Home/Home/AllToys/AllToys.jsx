import React, { useEffect, useState } from "react";
import AllToyTableRow from "./AllToyTableRow";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-cars')
        .then(res => res.json())
        .then(data => setAllToys(data))
    },[])
  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="form-control">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>


      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                allToys.map((allToy, idx) => <AllToyTableRow
                    key={allToy._id}
                    allToy={allToy}
                    idx={idx}
                ></AllToyTableRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
