import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../../provider/authProvider/authProvider";
import MyToysTableRow from "./MyToysTableRow";
import useTitle from "../../../../hooks/useTitle";

const MyToys = () => {
  useTitle("My toys");
  const [myToys, setMyToys] = useState([]);
  const {user} = useContext(AuthContext);
  const handleAscending = () => {
    fetch(`https://glaze-car-server.vercel.app/ascending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  const handleDescending = () => {
    fetch(`https://glaze-car-server.vercel.app/descending/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };
  useEffect(() => {
    fetch(`https://glaze-car-server.vercel.app/my-all-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  return (
    <div>
      <h3 className="text-center text-4xl my-4 relative  pb-5 font-bold">
        My Toys
        <div className="absolute top-0 btn-group right-0">
          <button onClick={handleAscending} className="btn">
            Price by Ascending
          </button>
          <button onClick={handleDescending} className="btn">
            Price by Descending
          </button>
        </div>
      </h3>

      <div className="">
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((myToy, idx) => (
              <MyToysTableRow
                key={myToy._id}
                myToy={myToy}
                idx={idx}
              ></MyToysTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
