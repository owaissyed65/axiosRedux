import { combineReducers } from "redux";
import { addCart } from "./addCart";
import { products, selectedProduct } from "./product";

const reducer = combineReducers({
    products: products,
    selectedProducts: selectedProduct,
    amount:addCart
})
export default reducer;