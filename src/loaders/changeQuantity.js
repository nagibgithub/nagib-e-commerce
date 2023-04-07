import {addToDb, getShoppingCart} from "../utilities/fakedb"

const changeProductQuantity = (id) => {
    addToDb(id)
}

export default changeProductQuantity