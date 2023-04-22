import React, {useEffect, useState} from 'react';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowRight, faArrowUp, faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
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
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-5 container m-auto'>
            <div className='mt-12 lg:mt-0 container m-auto lg:col-span-4'>
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
            <div className="lg:w-full lg:mt-0 mt-3 mx-3 h-max shadow-lg lg:sticky lg:top-0">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
                <div className='mx-auto px-3 py-3 bg-[#ffe0b3]'>
                    <Link className='bg-orange-500 hover text-white border-orange-500 border-2 hover:bg-white hover:text-orange-500 rounded flex justify-between items-center h-14 px-5 text-lg mb-3' to={'/check'}><button className='flex justify-between w-full items-center'>Check Out <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
                </div>
            </div>
            <a className='' href="#"><button className=' z-50 w-16 h-16 bg-[#ff9900] rounded-full fixed bottom-0 right-0'><FontAwesomeIcon icon={faArrowUp} /></button></a>
        </div>
    );
};

export default Shop;