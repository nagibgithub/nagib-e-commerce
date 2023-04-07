import {getShoppingCart} from "../utilities/fakedb";

const cartProductsLoader = async () => {

    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const productsLocalStorage = getShoppingCart()
    const saveCart = []

    for (const id in productsLocalStorage) {
        const productLocalStorage = products.find(pd => pd.id === id)

        if (productLocalStorage) {
            const productQuantity = productsLocalStorage[id];
            productLocalStorage.quantity = productQuantity
            saveCart.push(productLocalStorage)
        }
    }

    return saveCart;
}

export default cartProductsLoader;