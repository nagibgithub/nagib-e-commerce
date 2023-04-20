import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faArrowCircleRight, faArrowRight, faArrowRotateRight, faRightLong, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import {Link} from 'react-router-dom';

const Product = (props) => {

    const {id, img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <Link to={`/product/${id}`}><img src={img} alt="" /></Link>
            <div className='product-info flex flex-col'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;