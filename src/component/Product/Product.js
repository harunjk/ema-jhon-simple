import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {product, addToCart}=props;
    const {name, price, ratings, img, seller, category, id }=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller {seller}</small></p>
                <p><small><strong>seller {ratings} star</strong></small></p>
            </div>
            {/* receved add to cart  */}
            <button onClick={()=>addToCart(product)} className='btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;