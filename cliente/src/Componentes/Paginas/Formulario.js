import React, { Component } from 'react';
import url from '../ImagenesProyecto/LogoCompletoLAEL.png'
class Formulario extends Component{
    /*state = {nombre:'',correo:' ',numT:'',numCel:'',generoS:'',fecha:'',selec:''};
    valuetoSate=({name,value}) => {
        this.setState(() => {
            return {[name]:value};
        });

        esto va dentro del div
        <pre> {JSON.stringify(this.state,null,2)} </pre>
    };*/
    render(){
    return(
        <div>
        
        <div className='main-F'>
                <form className='Formulario'>
                         <legend className='formu'>Formulario</legend>
                            <div className="nombre">
                                <label>Nombre</label>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    className="form-control" 
                                    placeholder="Ingrese Nombre"
                                    //onChange={event => this.valuetoSate(event.target)}
                                    required
                                />
                            </div>
                            
                            <div className="correo">
                                <label>Ingrese su Correo</label>
                                <input 
                                 id="correo"
                                 name="correo"
                                 type="email"
                                 className="form-control" 
                                 placeholder="Ingrese Correo"
                                 //onChange={event => this.valuetoSate(event.target)}
                                 id="correo"
                                 required
                                 />
                            </div>

                            <div className="numT">
                                <label>Numero de Telefono</label>
                                <input
                                 id="numT"
                                name="numT"
                                 type="text"
                                 className="form-control"
                                 placeholder="Ingrese su Telefono"
                                 //onChange={event => this.valuetoSate(event.target)}
                                 required
                                 />
                            </div>
                            <div className="numCel">
                                <label>Numero de Celular</label>
                                <input
                                id="numCel"
                                 name="numCel"
                                 type="text" 
                                 className="form-control" 
                                 placeholder="Ingrese Numero de Celular"
                                 //onChange={event => this.valuetoSate(event.target)}
                                 required
                                 />
                            </div>
                            <div className="generoS">
                                <label className='cero'>Genero</label>
                                <div className='uno'>
                                    Maculino:<input 
                                    type="radio" 
                                    id="generoS"
                                    name="generoS" 
                                    value="masculino"
                                    //onChange={event => this.valuetoSate(event.target)}
                                    required
                                    /><br/>
                                </div>
                                <div className='dos'>
                                    Femenino: <input 
                                    type="radio" 
                                    id="generoS"
                                    name="generoS" 
                                    value="Femenino"
                                    //onChange={event => this.valuetoSate(event.target)}
                                    required
                                    /><br/>
                                </div>
                                <div className='tres'>
                                    Otros: <input 
                                    type="radio" 
                                    id="contactChoice1"
                                    name="generoS" 
                                    value="Otros"
                                    //onChange={event => this.valuetoSate(event.target)}
                                    required
                                    /><br/>
                                </div>
                            </div>
                            <div className="fecha">
                                <label>Seleccione fecha y Hora</label>
                                <input 
                                name="fecha"
                                type="datetime-local" 
                                className="form-control" 
                                placeholder="Ingrese Numero de Celular"
                                //onChange={event => this.valuetoSate(event.target)}
                                required
                                />
                            </div>

                            <div className="selec">
                                <label>Seleccione Tratamiento</label>
                                <select name="selec" className="form-select" id="selec">
                                    <option>TRATAMIENTO COSMETICO FACIAL</option>
                                    <option>TRATAMIENTO CORPORAL PARA AFITMAR Y MODEAR CUERPO</option>
                                    <option>DEPILACION</option>
                                    <option>MASAJES</option>
                                    <option>MAQUILLAJE FACIL Y CORPORAL</option>
                                    <option>APARATOLOGIA ESTETICA</option>
                                    <option>MANICURA Y PEDICURA</option>
                                    <option>ACESORIA DE IMAGEN</option>
                                </select>
                            </div>

                            <button  className='boton' type="submit" className="btn btn-primary">Submit</button>
                        
                </form>
                <div className='Mapa'>
                        <img src={url} className="imagenIndex3"/>
                </div>
        </div>
        <footer class="footer">
         <div class="contenedor">
             Centro Estetico Integral LAEL &copy; 2021
         </div>
     </footer>
        </div>
    );
}
}
export default Formulario;