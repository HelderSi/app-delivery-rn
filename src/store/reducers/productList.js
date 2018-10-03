const INITIAL_STATE = [
]

export default productList = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'CHANGE_PRODUCT_LIST':
            return action.payload
        default:
            return state
    }
}
