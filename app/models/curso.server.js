export async function getCurso(){
    const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/curso?populate=imagen`)
    const resultado = await respuesta.json();
    return resultado;
}