import { combineReducers } from "redux";
import products from "./product";

const reducer = combineReducers({
    products: products
})
export default reducer;