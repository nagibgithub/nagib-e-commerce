import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faClose, faTrashCan, faArrowAltCircleRight, faArrowRight, faAdd, faMinus} from '@fortawesome/free-solid-svg-icons'



const OrderCard = ({product, removeCartItem, changeProductQuantity, changeProductQuantityDecrease}) => {
    const {id, img, name, price, shipping, quantity} = product
    return (
        <div className='review-card flex bg-orange-100 m-2 p-2'>
            <div className='product-name-img flex'>
                <img className='w-28' src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <p><small>Price: <span className='span'>${price}</span></small></p>
                    <p><small>Shipping Charge: <span className='span'>${shipping}</span></small></p>
                </div>
            </div>
            <div className='review-btn-div flex'>
                <div className='review-quantity flex'>
                    <h4 onClick={() => changeProductQuantityDecrease(id)} className='plus-minus-icon'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></h4>
                    <h4 className='review-quantity-number'>{quantity}</h4>
                    <h4 onClick={() => changeProductQuantity(id)} className='plus-minus-icon'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></h4>
                </div>
                <button onClick={() => removeCartItem(id)} className='review-clear-btn'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderCard;