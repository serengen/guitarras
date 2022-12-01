import { useEffect, useState } from 'react';

import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'
import styles from './styles/index.css'
import Header from "./components/header";
import Footer from './components/footer';
export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: "preconnect",
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: "preconnect",
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },        {
            rel: "stylesheet",
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
    ]
}

export default function App(){

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS);

    useEffect(() => {
        localStorage.setItem('carrito',JSON.stringify(carrito))
    }, [carrito])



    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraState =>{
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        }else{
            setCarrito(([...carrito,guitarra]))
        }
        alert("Guitarra Agregada con exito")
    }
    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState =>{
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
      }
    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
      }
    const vaciarCarrito = () => {
        setCarrito([])
        alert("Compra Exitosa")
    }
    
    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra,
                    vaciarCarrito
                }}
            />
        </Document>
        
    )
}

function Document({children}){
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function CatchBoundary(){
    const error = useCatch()
    return(
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la Pagina Principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    
    return(
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la Pagina Principal</Link>
        </Document>
    )
}