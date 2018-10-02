import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';

import colors from '../styles/colors';

import {Actions} from 'react-native-router-flux';

export default class Concluido extends Component {

    render(){
      return (
          <View style={ styles.container } >
              <Text style={ styles.text } >Pedido registrado, a entrega será realizada em alguns minutos.</Text>
              <TouchableOpacity style={ styles.button } onPress={ () => Actions.popTo('pedido') }>
                  <Text style={styles.textButtom}>Página inicial</Text>
              </TouchableOpacity>
          </View>
      );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
      fontSize: 20,
      margin: 10,
    },
    button:{
      height: 60,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.success,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      borderRadius: 5,
    },
    textButtom:{
      fontSize: 20,
      color: colors.darkTransparent,
      fontWeight: 'bold',
    },
  });
