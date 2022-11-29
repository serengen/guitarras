import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData, Outlet } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras"

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data;

}

function Tienda() {
  const guitarras = useLoaderData();

  console.log(guitarras)
  return (
    <main className="contenedor">
      <ListadoGuitarras 
                guitarras = {guitarras}
            />
     
    </main>
  )
}

export default Tienda