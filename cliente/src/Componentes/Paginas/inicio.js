import React, { Component } from 'react';
import Carrusel from '../Carrusel';
class Inicio extends Component{
    render(){
    return(
         <><><>
            <Carrusel /></>
         <div className="textoPrincipal">
             <p></p>
        </div>        
        <div class="grid">
                    <div className="content1">MARTES Promicion 2x1 </div>
                    <div className="content2">MIERCOLES descuentos en mascarillas</div>
                    <div className="content3">JUEVES descuento en masajes</div>
                    <div className="content4">VIERNES 10% de descuento en radiofrecuencia</div> 
         </div> 
         <div className="textoPrincipal">
             <p></p>
        </div>  
         </> <footer className="footer">
            <div className="contenedor">
                Centro Estetico Integral LAEL &copy; 2021
            </div>
        </footer></>  
    );
}
}
export default Inicio;