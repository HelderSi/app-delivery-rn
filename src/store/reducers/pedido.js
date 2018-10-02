const INITIAL_STATE = {
    total: 0,
    itens: {}
}


export default pedido = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'CHANGE_PEDIDO_ITEM':
            let current_amount = state.itens[action.payload.name] || 0
            let itens = { ...state.itens, [action.payload.name]:  current_amount + action.payload.delta }
            if(current_amount === 1 && action.payload.delta === -1 ) delete itens[action.payload.name]
            return { ...state, 
                    total: Math.abs(state.total + action.payload.price),
                    itens
                }
        default:
            return state
    }
}
