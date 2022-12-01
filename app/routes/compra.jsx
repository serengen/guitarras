import React from 'react'
import { useOutletContext, Link } from "@remix-run/react"
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils"
export async function venta(){
    const [usuario] = useState(0)
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    console.log(usuario)
    let nombre = usuario.nombre;
    let email = usuario.email;
    let direccion = usuario.direccion;
    let contraseña = usuario.contraseña;

        Promise.all(carrito.map(async(guitarra) => {
            const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/guitarras?filters[id]=${guitarra.id}&populate=imagen`);
            const resultado = await respuesta.json();
            const venta = resultado.data[0].attributes.stock - guitarra.cantidad;
            if (venta < 0) {
              alert("No hay suficientes guitarras en stock")
            } else {
              let jsonbody = {
                data:{
                  'nombre' :  nombre,
                  'email': email,
                  'direccion': direccion,
                  'contraseña': contraseña,
                  'cantidad': guitarra.cantidad,
                  'idGuitarra': guitarra.id,
                }
                
              }
              try{
                    const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(jsonbody)
                };
                
                const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/compradores/`, requestOptions);
                const resultado = await respuesta.json();
                console.log(resultado)
                alert("Compra Exitosa")
              }catch(error){
                console.log(error)
              }
            }
          }));


    Promise.all(carrito.map(async(guitarra) => {
      const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/guitarras?filters[id]=${guitarra.id}&populate=imagen`);
      const resultado = await respuesta.json();
      const venta = resultado.data[0].attributes.stock - guitarra.cantidad;

      if (venta < 0) {
        alert("No hay suficientes guitarras en stock")
      } else {
        let jsonbody = {
          data:{
            'stock' :  venta
          }
          
        }
        try{
              const requestOptions = {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(jsonbody)
          };
          
          const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/guitarras/${guitarra.id}`, requestOptions);
          const resultado = await respuesta.json();
          console.log(resultado)
          alert("Compra Exitosa")
        }catch(error){
          console.log(error)
        }
      }
    }));
  
    
  }

class compra extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          nombre: '',
          email: '',
          direccion: '',
          contraseña: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

        render() {
        return (
            <form onSubmit={this.handleSubmit} className='formulario'>
                <div className="form">
                    <h1>Registro</h1>
                    <div className="grupo">
                        <input type="text" name="nombre" value={this.state.value} required onChange={this.handleChange}><span className="barra"></span></input>
                        <label>Nombre</label>
                    </div>
                    <div className="grupo">
                        <input type="email" name='email' value={this.state.value} required onChange={this.handleChange}><span className="barra"></span></input>
                        <label>Email</label>
                    </div>
                    <div className="grupo">
                        <input type="text" name='direccion' value={this.state.value} required onChange={this.handleChange}><span className="barra"></span></input>
                        <label>Direccion</label>
                    </div>
                    <div className="grupo">
                        <input type="password" name='contraseña' value={this.state.value} required onChange={this.handleChange}><span className="barra"></span></input>
                        <label>Password</label>
                    </div>

                    <input type="submit" value="Submit" onClick={() => venta()}>Comprar</input>
                </div>
            </form>
        );
        
}
}
export default compra