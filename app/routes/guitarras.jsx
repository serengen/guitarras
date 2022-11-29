import {Outlet, useOutletContext } from "@remix-run/react";

function Tienda() {

  return (
    <main className="contenedor">
      <Outlet 
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda