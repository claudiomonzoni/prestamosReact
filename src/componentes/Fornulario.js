import React, { Component } from 'react';
class Formulario extends Component {
    state = { 
        cantidad: '',
        plazo: ''
     }
     actualizarState = (e)=>{
         /*
        this.state.cantidad = e.target.value;
        console.log(this.state)
        */
       //actualizar el state con metodo de react
       const {name, value} = e.target
       this.setState({
           //cantidad: e.target.value,
           [name]:Number(value)
           
       })
     }

     habilitarSubmit =()=>{
         //aplicar destructuring
        const {cantidad, plazo} = this.state
         //leer los campos/variables
        const noValida = !cantidad || !plazo
        //console.log(noValida)
         //retornar respuesta
         return noValida
     }

     calcularPrestamo = (e)=>{
         e.preventDefault()

         //aplicar destructuring
         const {cantidad, plazo} = this.state

         // enviar datos al componente padre app.js



         this.props.datosPrestamo(cantidad, plazo)

     }
    render() { 
        //const {cantidad}= this.state
        //console.log(cantidad)
        return (  
           <form onSubmit= {
               this.calcularPrestamo
           }>
               <div>
                   <label>Cantidad de prestamo:</label>
                   <input 
                   onChange={
                       this.actualizarState
                   }
                   type="number" 
                   name="cantidad" className="u-full-width" placeholder="Escribe la cantidad" />
               </div>
               <div>
                   <label>Plazo para pagar:</label>
                   
                   <select name="plazo" onChange={
                       this.actualizarState
                   } className="u-full-width">
                     <option value="">Selecciona</option>
                     <option value="3">3 meses</option>
                     <option value="6">6 meses</option>
                     <option value="12">12 meses</option>
                   </select>
               </div>
               <div>
                   <input 
                   disabled= {this.habilitarSubmit()}
                   type="submit" 
                   value="calcular" className="u-full-width button-primary" />
               </div>
           </form>
        );
    }
}
 
export default Formulario;