import React from 'react';

const AllToyTableRow = ({allToy,idx}) => {
    const {name, sellerName, subCategory, price,availableQuantity} = allToy;

    return (
        
             <tr>
              <th>{idx+1}</th>
              <td>{name}</td>
              <td>{sellerName}</td>
              <td>{subCategory}</td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
        
    );
};

export default AllToyTableRow;