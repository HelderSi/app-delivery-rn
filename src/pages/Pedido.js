import React, {Component} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar,
    TouchableOpacity
 } from 'react-native'
import Header from '../components/Header'
import Menu from '../components/Menu'
import colors from '../styles/colors'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

class Pedido extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.darkPrimary}
                    barStyle="light-content"
                />
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.menu}>
                    <Menu />
                </View>
                <View style={styles.total}>
                    <Text style={styles.totalValue}>R$ {this.props.total.toFixed(2).replace('.',',')}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => (Actions.endereco())}>
                    <Text style={styles.buttonText}>Confirmar Pedido</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.lighter
    },
    header:{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 10,
    },
    menu:{
        flex: 8,
        margin: 10,
    },
    total:{
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    totalValue:{
        fontSize: 25,
    },
    button:{
        flex: 1,
        backgroundColor: colors.success,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkTransparent
    }
})

const mapStateToProps = state =>({
    total: state.pedido.total
})

export default connect(mapStateToProps)(Pedido)