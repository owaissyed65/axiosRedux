import { actionType } from "../constants/actiontype"

export const setProduct = (products) => {

    return {
        type: actionType.Set_Products,
        payload: products
    }
}
export const selectedProduct = (products) => {
    return {
        type: actionType.Selected_Products,
        payload: products
    }
}
export const addToCart = (amount) => {
    console.log(amount)
    return {
        type: actionType.Add_to_cart,
        payload: {
            amount: amount,
            productAdd: 1
        }

    }
}