import React from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTableRow = ({myToy, idx}) => {
  const {_id, name, sellerName, subCategory, price, availableQuantity} = myToy;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://glaze-car-server.vercel.app/delete-toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>
        <Link to={`/update-toy/${_id}`} className="btn btn-ghost btn-xs">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysTableRow;
