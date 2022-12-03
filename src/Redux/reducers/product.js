const initialState = {
    products: []
}
export const products = (state = initialState, action) => {

    if (action.type === "SET_PRODUCTS") {
        return {
            ...state,
            products: [...action.payload]
        }

    }
    else return {
        ...state,
    }

}
export const selectedProduct = (state = initialState, action) => {
    if (action.type === "SELECTED_PRODUCTS") {
        return {
            ...state,
            products: [...action.payload]
        }

    }
    else return {
        ...state,
    }
}