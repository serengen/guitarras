import { useOutletContext } from "@remix-run/react"
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils"
import { putCarrito } from "~/models/compra.server";
import { getGuitarra } from "~/models/guitarras.server";

export async function venta(){
  const carrito = JSON.parse(localStorage.getItem('carrito'))
  
  

  let jsonbody = {
    data:{
      'stock' :  carrito[0].cantidad
    }
    
  }

  try{
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonbody)
    };
    console.log(carrito)
    const respuesta = await fetch(`http://localhost:1337/api/guitarras/${carrito[0].id}`, requestOptions);
    const resultado = await respuesta.json();
    return resultado
  }catch(error){
    console.log(error)
  }
}

function Carrito() {

  const [total, setTotal] = useState(0)
  const {carrito, actualizarCantidad,eliminarGuitarra} = useOutletContext();
  
  useEffect(() =>{
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio),0)
    setTotal(calculoTotal)
  },[carrito])


  return (
    <ClientOnly fallback={'cargando....'}>
      {() => (
      <main className="contenedor compra">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>

              {carrito?.length === 0 ? 'Carrito Vacío' : (
                carrito?.map( producto => (
                  <div key={producto.id} className="producto">
                    <div>
                        <img src={producto.imagen} alt="" />
                    </div>
                    <div>
                      <p className="nombre">{producto.nombre}</p>
                      <p className="cantidad"><span>Cantidad: 
                        <select value={producto.cantidad} className="select" onChange={e => actualizarCantidad({
                          cantidad: e.target.value,
                          id: producto.id
                        })}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        </span></p>
                      <p className="precio"><span>${producto.precio}</span></p>
                      <p className="subtotal">Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                    </div>
                    <button type="button" className="eliminar" onClick={() => eliminarGuitarra(producto.id)}>X</button>
                  </div>
                ))
              )}
            </div>
                      
          <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar: ${total}</p>
              <button type="button" className="finalizar" onClick={() => venta()}>Comprar</button>
          </aside>
          </div>
      </main>
      )}
      
    </ClientOnly>
  )
}

export default Carrito