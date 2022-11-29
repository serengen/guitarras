export async function getGuitarras(){
    const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/guitarras?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getGuitarra(url){
    const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/guitarras?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}