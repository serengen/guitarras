import React from 'react'
import Guitarra from './guitarra'


function ListadoGuitarras({guitarras}) {
  return (
    <>
    <h2 className="heading">Tienda</h2>
    {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras?.map(guitarra =>(
            <Guitarra 
                key={guitarra.id}
                guitarra = {guitarra.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras