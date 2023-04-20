import React from 'react';
import {Link, useLoaderData, useParams} from 'react-router-dom';
import Orders from '../Orders/Orders';

const ProductDetails = () => {

    const allProducts = useLoaderData()
    const {productId} = useParams()
    const product = allProducts.find(pd => pd.id === productId)
    const {
        id,
        category,
        name,
        seller,
        price,
        stock,
        ratings,
        ratingsCount,
        img,
        shipping,
        quantity
    } = product
    return (
        <div className='flex'>
            <img className='w-[500px]' src={img} alt="" />
            <div>
                <h1>{name}</h1>
                <h1>Category: {category}</h1>
                <h1>Seller: {seller}</h1>
                <h1>Stock: {stock}</h1>
                <h1>Rating: {ratings}</h1>
                <h1>Rating Count: {ratingsCount}</h1>
                <h1>Price: ${price}</h1>
                <h1>Shipping: ${shipping}</h1>
                <h1>id: {id}</h1>
                <button className='submit-button' onClick={()=>history.back()}>Back to Previous</button>
            </div>
        </div>
    );
};

export default ProductDetails;