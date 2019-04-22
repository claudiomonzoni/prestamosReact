import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';

//componentes
import Formulario from './componentes/Fornulario'
import {calcularTotal} from './helpers'
import Resultado from './componentes/resultado'
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';

class App extends Component {
//state hecho por mi
state ={
  total: '',
  cantidad: '',
  plazo: '',
  cargando : false
}
  //props
  datosPrestamo= (cantidad, plazo )=>{
    
   const total = calcularTotal(cantidad, plazo)
   //colocar el resultado en mi state con setState
   this.setState({
     cargando: true
   }, ()=>{
     setTimeout(
       ()=>{
        this.setState({
          total,
          cantidad,
          plazo,
          cargando: false
        })
       }, 2000
     )
   })
  }


  render() {
    const {total, cantidad, plazo, cargando} = this.state

    //cargar un componente condicionalmente
    let componente 
    if(total=== '' && !cargando){
      componente = <Mensaje />

    }else if(cargando){

      componente = <Spinner />

    }else {
      componente = <Resultado
                    total = {total}
                    cantidad = {cantidad}
                    plazo = {plazo}
      />
    }

    return (
      <Fragment>
      <h1>Cotizador de prestamos</h1>
    <div className="container">
      <Formulario
      //envio el metodo al componenete
       datosPrestamo = {this.datosPrestamo}
      />
    <div className="mensajes">
    
    {componente}
    {/*}
    <Resultado
      //envio las variables al componenete
      total = {total}
      cantidad = {cantidad}
      plazo = {plazo}
      />

      <Mensaje /> 
    {*/}

    </div>
    </div>
    
    </Fragment>
    );
  }
}

export default App;
