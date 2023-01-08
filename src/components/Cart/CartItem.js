import React from "react";
import './style.css';

const CartItem = ({cartData,handleAdd,handleRemove}) => {
    //console.log(cartData);
    const totalPrice = cartData.reduce((adder,cv) => adder + cv.itemPrice*cv.qty, 0);
    //console.log(totalPrice);

    return (
        <div className="cart-container">
            <h2>Cart Items</h2>
            {!cartData.length && <p>Cart is empty</p>}
            {cartData.map((cartItem) => (
                    <div className="cartItemContainer" key={cartItem.id}>
                    <div><img src={cartItem.img} alt={cartItem.itemName}/></div>
                    <div><p>{cartItem.itemName}</p></div>
                    <div><p>{cartItem.itemPrice}</p></div>
                    <div className="cartButtonsContainer">
                        <div><button onClick={() => handleAdd(cartItem)}>+</button></div>
                        <div><p>{cartItem.qty}</p></div>
                        <div><button onClick={() => handleRemove(cartItem)}>-</button></div>
                    </div>
                    <div className="cart-total-price">
                        <p>{cartItem.qty} x ${cartItem.itemPrice.toFixed(3)}</p>
                    </div>
                </div>
            ))}
            {cartData.length !== 0 && (
                <div className="cart-total-container">
                    <div>
                        <p>Total Price</p>
                    </div>
                    <div className="cart-total-price">
                        <p>${totalPrice.toFixed(3)}</p>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default CartItem;