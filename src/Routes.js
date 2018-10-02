import React from 'react'
import {Router, Scene} from 'react-native-router-flux'

import Pedido from './pages/Pedido'
import Endereco from './pages/Endereco'
import Concluido from './pages/Concluido'
import colors from './styles/colors'

export default props =>(
    <Router>    
        <Scene key='root'>    
            <Scene key='pedido' component={Pedido} hideNavBar/>
            <Scene key='endereco' component={Endereco} title="Endereço" navBarButtonColor={colors.white} navigationBarStyle={{backgroundColor: colors.primary }}/>
            <Scene key='concluido' component={Concluido} hideNavBar navBarButtonColor={colors.white} navigationBarStyle={{backgroundColor: colors.primary }}/>
        </Scene>
    </Router>
)