import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faClose, faTrashCan, faArrowAltCircleRight, faArrowRight, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'



const OrderCard = ({product, removeCartItem, changeProductQuantity, changeProductQuantityDecrease}) => {
    const [isTrue, setTrue] = useState(true);
    const { id, img, name, price, shipping, quantity } = product
    return (
        <div className='review-card flex bg-orange-100 m-2 p-2 justify-between items-center'>
            <div className='product-name-img flex items-center'>
                <img className='w-28' src={img} alt="" />
                <div className='ml-5'>
                    <h5 className='text-lg font-bold'>{name}</h5>
                    <p className='text-base font-bold'><small>Price: <span className='span text-orange-500'>${price}</span></small></p>
                    <p className='text-base font-bold'><small>Shipping Charge: <span className='span text-orange-500'>${shipping}</span></small></p>
                </div>
            </div>
            <div className='review-btn-div flex items-center'>
                <div className='review-quantity flex items-center mr-5 border border-orange-300 h-max'>
                    <h4 onClick={() => changeProductQuantityDecrease(id)} className='plus-minus-icon px-2 cursor-pointer hover:bg-white'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></h4>
                    <h4 className='review-quantity-number px-2 font-bold text-lg'>{quantity}</h4>
                    <h4 onClick={() => changeProductQuantity(id)} className='plus-minus-icon px-2 cursor-pointer hover:bg-white'><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon></h4>
                </div>
                <button onClick={() => removeCartItem(id)} onPointerDown={()=>setTrue(false)} onPointerLeave={()=>setTrue(true)} className='review-clear-btn h-14 w-14 border-2 bg-red-200 hover:bg-white text-red-600 border-red-200 hover:border-red-400 rounded-full text-lg'><FontAwesomeIcon icon={faTrashCan} rotation={!isTrue?90:0}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderCard;