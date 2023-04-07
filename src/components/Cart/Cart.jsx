import React from 'react';
import './Cart.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faClose, faTrashCan, faArrowAltCircleRight, faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart, clearCart}) => {
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart-body'>
            <div className='cart'>
                <h4>Order Summary</h4>
                <div>
                    <p>Selected Items: </p>
                    <p>{quantity}</p>
                </div>
                <div>
                    <p>Total Price: </p>
                    <p>${totalPrice}</p>
                </div>
                <div>
                    <p>Shipping: </p>
                    <p>${totalShipping}</p>
                </div>
                <div>
                    <p>Tax: </p>
                    <p>${tax.toFixed(2)}</p>
                </div>
                <div>
                    <h3>Grand Total: </h3>
                    <h3>${grandTotal.toFixed(2)}</h3>

                </div>
            </div>
            <div className='button-div'>
                <button onClick={clearCart} className='btn-clear'>Clear Cart  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                <button className='btn-review'>Review Order  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;