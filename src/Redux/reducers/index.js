import { combineReducers } from "redux";
import { products, selectedProduct } from "./product";

const reducer = combineReducers({
    products: products,
    selectedProducts: selectedProduct
})
export default reducer;