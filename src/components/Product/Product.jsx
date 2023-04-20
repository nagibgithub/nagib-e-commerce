import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faArrowCircleRight, faArrowRight, faArrowRotateRight, faRightLong, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const Product = (props) => {

    const {id, img, name, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='border border-orange-300 rounded-lg p-2 shadow-lg flex flex-col justify-between'>
            <Link to={`/product/${ id }`}>
                <div>
                    <img className='rounded-t-lg' src={img} alt="" />
                    <h6 className='text-xl capitalize'>{name}</h6>
                    <p className='my-1'>Manufacturer: {seller}</p>
                </div>
            </Link>
            <div>
                <div className='my-3'>
                    <p className='text-xl'>Price: ${price}</p>
                    <p className='text-sm'>Rating: {ratings} Stars</p>
                </div>
                <button className='border-4 border-[#ffe1b3] p-3 rounded m-auto w-full bg-[#FFE0B3] hover:bg-[#ff9900] hover:border-[#ff9900] active:border-white' onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;