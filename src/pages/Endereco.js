import React, {Component} from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native'
import colors from '../styles/colors'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import firebase from 'firebase'


class Endereco extends Component{

    constructor(props){
        super(props)
        this.state = {
            rua: '',
            numero: '',
            bairro: '',
            cliente: '',
        }
    }

    _enviarPedido = () =>{
        const endereco = this.state
        const {itens, total} = this.props
        firebase.database().ref('pedidos')
                .push({ endereco, itens, total })
                .then( () => Actions.concluido() )
                .catch( err => null);
    }

    render(){
        return(
            <View  style={styles.container}>  
                <TextInput
                    style={styles.input}
                    value={this.state.cliente}
                    onChangeText={ text => this.setState({cliente:text})}
                    placeholder='Nome completo'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.rua}
                    onChangeText={ text => this.setState({rua:text})}
                    placeholder='Rua'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.numero}
                    onChangeText={ text => this.setState({numero:text})}
                    placeholder='Número'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.bairro}
                    onChangeText={ text => this.setState({bairro:text})}
                    placeholder='Bairro'
                />
                <TouchableOpacity style={styles.button} onPress={ () => this._enviarPedido() }>
                    <Text style={styles.textButtom}>Enviar Pedido</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },
    input:{
        backgroundColor: colors.white,
        height: 40,
        margin: 10,
        paddingHorizontal: 10,
        borderColor: 'gray',
    },
    button:{
        height: 60,
        padding: 20,
        backgroundColor: colors.success,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 5,
    },
    textButtom:{
        color: colors.darkTransparent,
        fontWeight: 'bold',
        fontSize: 20,
    }
})

const mapStateToProps = state =>({
    total: state.pedido.total,
    itens: state.pedido.itens,
})

export default connect(mapStateToProps)(Endereco)