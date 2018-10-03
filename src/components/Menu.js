import React, {Component} from 'react'
import { FlatList } from 'react-native'
import firebase from 'firebase'
import Product from './Product'
import {changeProductList} from '../store/actions/productsActions'
import {connect} from 'react-redux'

class Menu extends Component {

    componentDidMount(){
        firebase.database().ref('products')
                .once('value')
                .then( snapshot => {
                    this.props.changeProductList(snapshot.val())
                })
    }

    render(){
        return(
            <FlatList
                data={this.props.product_list}
                renderItem={ ({item}) => <Product name={item.name} price={item.price}/>}
                keyExtractor={ (item) => item.id }
            />
        )
    }
}

const mapStateToProps = state =>({
    product_list: state.productList
})

export default connect(mapStateToProps,{changeProductList})(Menu)