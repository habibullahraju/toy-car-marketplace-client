import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../../provider/authProvider/authProvider";
import MyToysTableRow from "./MyToysTableRow";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://glaze-car-server.vercel.app/my-all-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [myToys]);
  return (
    <div>
      <h3 className="text-center text-4xl my-4  pb-5 font-bold">My Toys</h3>

      <div>
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
