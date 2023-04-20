import React, {useEffect, useState} from 'react';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faSearch} from '@fortawesome/free-solid-svg-icons'
// import './Shop.css';

const Shop = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='grid grid-cols-4 container m-auto'>
            <div className={`${ isTrue ? 'transition-all -top-[260px] fixed right-0' :'transition-all top-[80px] fixed right-0'}`}>
                <div className="w-60">
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                    ></Cart>
                    <div onClick={() => setIsTrue(!isTrue)} className='py-2 bg-[#ff9900] mx-3 flex justify-center rounded-b-full cursor-pointer'>
                        <button className='text-xl'><FontAwesomeIcon icon={faArrowDown} rotation={!isTrue ? 180 : ''} /></button>
                    </div>
                </div>
            </div>
            <div className='container m-auto col-span-3'>
                <div className='bg-orange-200 rounded-full text-center m-5 p-2 flex'>
                    <div className='flex w-full items-center bg-white rounded-full'>
                        <FontAwesomeIcon className='px-3 text-orange-300' icon={faSearch}></FontAwesomeIcon>
                        <input className='p-2 text-lg w-full rounded-full focus:outline-none' placeholder='Search Your Product' type="text" />
                    </div>
                    {/* <button className='px-2 cursor-pointer'>Search</button> */}
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;