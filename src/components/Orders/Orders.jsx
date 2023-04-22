import React, {useEffect} from 'react';
// import './Orders.css';
import Cart from '../Cart/Cart';
import {Link, useLoaderData} from 'react-router-dom';
import OrderCard from './OrderCard';
import {useState} from 'react';
import {addToDb, deleteShoppingCart, removeFromDb, removeToDb} from '../../utilities/fakedb';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const addCard = useLoaderData()

    const [cart, setCart] = useState(addCard)
    // console.log(cart);
    const removeCartItem = id => {
        const newCard = cart.filter(pd => pd.id !== id)
        removeFromDb(id)
        setCart(newCard);
        // console.log(cart);
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const changeProductQuantity = (id) => {
        const increaseProduct = cart.map(pd => {
            if (pd.id === id) {
                pd.quantity++
            }
            return pd
        })
        setCart(increaseProduct)
        addToDb(id)
    }

    const changeProductQuantityDecrease = (id) => {
        const quantityDecrease = cart.map(pd => {
            if (pd.id === id && pd.quantity > 1) {
                pd.quantity--
                removeToDb(id)
            }
            return pd
        })
        setCart(quantityDecrease)
    }

    // useEffect()

    // console.log(addCard);
    return (
        <div className='container grid grid-cols-5 m-auto'>
            <div className='col-span-3' >
                {
                    cart.map(pd => <OrderCard
                        className=''
                        key={pd.id}
                        product={pd}
                        removeCartItem={removeCartItem}
                        changeProductQuantity={changeProductQuantity}
                        changeProductQuantityDecrease={changeProductQuantityDecrease}
                    ></OrderCard>)
                }
            </div>
            <div className="col-span-2">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
                <Link className='bg-orange-500 hover text-white border-orange-500 border-2 hover:bg-white hover:text-orange-500 rounded flex justify-between items-center h-14 px-5 text-lg mb-3' to={'/check'}><button className='flex justify-between w-full items-center'>Check Out <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
            </div>
        </div>
    );

};

export default Orders;