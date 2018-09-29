import React, {Component} from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import colors from '../styles/colors'

export default class Product extends Component{

    state = {
        amount: 0,
    }

    constructor(props){
        super(props)
    }

    _changeAmount = delta =>{
        if ( delta === -1 && this.state.amount === 0) return null
        this.setState(prev => ({ amount: prev.amount + delta }))
    }

    render(){
        return(
            <View style={styles.box}>
                <View>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.price}>R$ {this.props.price}</Text>
                </View>
                <View style={styles.quantity}>
                    <Text style={styles.quantityValue}>{this.state.amount}</Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={ () => this._changeAmount(1) }>
                            <Text style={styles.textButton}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => this._changeAmount(-1) }>
                            <Text style={styles.textButton}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: colors.white,
        margin: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        // 2ª rodada
        alignItems: 'center', 
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 4,
    },
    name:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 15,
        marginTop: 10,
    },
    quantity:{
        flexDirection: 'row',
    },
    quantityValue:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    button:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        fontSize: 25,
        color: colors.darkTransparent,
        fontWeight: 'bold',
    }
})