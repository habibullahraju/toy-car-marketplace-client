import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTableRow = ({allToy,idx}) => {
    const {_id, name, sellerName, subCategory, price,availableQuantity} = allToy;

    return (
        
             <tr>
              <th>{idx+1}</th>
              <td>{name}</td>
              <td>{sellerName}</td>
              <td>{subCategory}</td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <td>
                <Link to={`/car-details/${_id}`} className="btn btn-ghost btn-xs">details</Link>
              </td>
            </tr>
        
    );
};

export default AllToyTableRow;