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
        <div className='flex items-center'>
            <img className='w-[500px] rounded-xl m-5' src={img} alt="" />
            <div className='ml-2'>
                <h1 className='my-4'>{name}</h1>
                <h1 className='my-4'>Category: {category}</h1>
                <h1 className='my-4'>Seller: {seller}</h1>
                <h1 className='my-4'>Stock: {stock}</h1>
                <h1 className='my-4'>Rating: {ratings}</h1>
                <h1 className='my-4'>Rating Count: {ratingsCount}</h1>
                <h1 className='my-4'>Price: ${price}</h1>
                <h1 className='my-4'>Shipping: ${shipping}</h1>
                <h1 className='my-4'>Product Id: {id}</h1>
                <button className='submit-button' onClick={()=>history.back()}>Back to Previous</button>
            </div>
        </div>
    );
};

export default ProductDetails;