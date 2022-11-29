import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from '~/utils/helpers'

export async function loader({params}){
    const {postUrl} = params;
    const post = await getPost(postUrl)

    if (post.data.length === 0) {
        throw new Response('',{
            status: 404,
            statusText: 'Post No Encontrado'
        })
    }

    return post.data
}

function PostUrl() {
    const post = useLoaderData()
    console.log(post)
    const {contenido, imagen, titulo, publishedAt} = post[0].attributes

  return (
    <div className="contenedor post mt-3">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} />

        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </div>
    </div>
  )
}

export default PostUrl