import React from 'react';
import './style.css';

const ItemsList = ({item,handleAdd}) => {
    //console.log(item);

    return (
        <div className='item-box'>
            <img className='item-image' src={item.img} alt ={item.itemName} />
            <h4>{item.itemName}</h4>
            <div>Price: ${item.itemPrice}</div>
            <div>Available Quantity: {item.avalQty}</div>
            <div>
                <button onClick={() => handleAdd(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemsList;