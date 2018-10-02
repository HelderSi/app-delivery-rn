import { combineReducers } from 'redux'

import pedido from './pedido'
import productList from './productList'

export default combineReducers({
    pedido,
    productList
})

// global state
/*
{
    pedido: {
        itens:[],
        total: 0,
    },
    product_list:[],
    endereco: {
        rua: "",
        numero: "",
        bairro:"",
    }
}
*/
