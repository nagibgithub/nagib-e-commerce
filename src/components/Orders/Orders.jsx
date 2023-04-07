import React, {useEffect} from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import {useLoaderData} from 'react-router-dom';
import OrderCard from './OrderCard';
import {useState} from 'react';
import {addToDb, deleteShoppingCart, removeFromDb, removeToDb} from '../../utilities/fakedb';

const Orders = () => {
    const addCard = useLoaderData()

    const [cart, setCart] = useState(addCard)
    console.log(cart);
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
        <div className='shop-container'>
            <div className={'order-card'} >
                {
                    cart.map(pd => <OrderCard
                        key={pd.id}
                        product={pd}
                        removeCartItem={removeCartItem}
                        changeProductQuantity={changeProductQuantity}
                        changeProductQuantityDecrease={changeProductQuantityDecrease}
                    ></OrderCard>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );

};

export default Orders;