import React, {Component} from 'react'
import { View, FlatList } from 'react-native'

import Product from './Product'

import {connect} from 'react-redux'

class Menu extends Component {
    render(){
        return(
            <FlatList
                data={this.props.product_list}
                renderItem={ ({item}) => <Product name={item.nome} price={item.preco}/>}
                keyExtractor={ (item) => item.id }
            />
        )
    }
}

const mapStateToProps = state =>({
    product_list: state.productList
})

export default connect(mapStateToProps)(Menu)