const initialState = [
    {
        id: 1,
        title: 'OWais'
    }
]
const products = (state = initialState, action) => {
    if (action.type.Set_Products) {
        return state
    }
    else return state
    
}
export default products