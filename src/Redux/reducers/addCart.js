const initalState = {
    amount: 0,
    productAdd: 0
}
export const addCart = (state = initalState, action) => {
    console.log(action);
    if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            amount: state.amount + action.payload.amount,
            productAdd: state.productAdd + action.payload.productAdd
        }
    }
    else return state;
}
