import React, {Component} from 'react'
import { View, FlatList } from 'react-native'

import Product from './Product'

const product_list = [
    {id:'1', nome:'Burguer Carne', preco:'10,00'},
    {id:'2', nome:'Burguer Bacon', preco:'15,00'},
    {id:'3', nome:'Burguer Prime', preco:'25,00'},
]

export default class Menu extends Component {
    render(){
        return(
            <FlatList
                data={product_list}
                renderItem={ ({item}) => <Product name={item.nome} price={item.preco}/>}
                keyExtractor={ (item) => item.id }
            />
        )
    }
}