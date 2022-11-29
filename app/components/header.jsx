import { Link, useLocation } from '@remix-run/react'
import logo from "../../public/img/logo.svg";
import Navegacion from './navegacion';
function Header() {

    
 
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/" className="logo">
                <img src={logo} className="logo" alt='Imagen logo' />
            </Link>
            <Navegacion />
        </div>
    </header>
  )
}

export default Header