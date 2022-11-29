export async function getPosts(){
    const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/posts?populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}

export async function getPost(url){
    const respuesta = await fetch(`https://guitarla-server.herokuapp.com/api/posts?filters[url]=${url}&populate=imagen`);
    const resultado = await respuesta.json();
    return resultado;
}