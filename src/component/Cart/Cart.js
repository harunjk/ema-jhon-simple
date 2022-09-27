import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping
    }
    // Tax 10% 
    const tax= total * 0.1
    const taxt=tax.toFixed(2);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <hr />
            <h5>Select Order: {cart.length}</h5>
            <p>Total Price : {total}</p>
            <p>Total Shipping : {shipping} </p>
            <p>Tax : {taxt} </p>
            <h3>Grand Total: </h3>

        </div>
    );
};

export default Cart;