import React from "react";
import ItemList from "./ItemList";

const Items = ({itemsData,handleAdd}) => {
    
    return(
        <div className="products-section">
            <h2>
                Available Products
            </h2>
            <div className="items-container">
                {itemsData.map(item => (
                    <ItemList key = {item.id} item = {item} handleAdd={handleAdd} />
                ))}
            </div>
        </div>
    )
}

export default Items;