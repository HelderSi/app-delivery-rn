const INITIAL_STATE = {
    total: 0,
    itens: {}
}


export default pedido = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CHANGE_PEDIDO_ITEM':
            return { ...state, total: Math.abs(state.total + action.payload.price)}
        default:
            return state
    }
}
