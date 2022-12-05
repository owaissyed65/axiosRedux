const initialState = {
    products: []
}
const initialStateObj = {
    selProduct: {

    }
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
export const selectedProduct = (state = initialStateObj, action) => {
    if (action.type === "SELECTED_PRODUCTS") {
        return {
            ...state,
            selProduct: { ...action.payload }
        }

    }
    else return {
        ...state,
    }
}