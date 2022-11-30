import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import { getCurso } from "~/models/curso.server"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from '~/components/listado-posts'
import Curso from "~/components/curso"

export async function loader(){

    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])

    return{guitarras: guitarras.data,
        posts: posts.data,
        curso: curso.data
    }
}

function Index() {
    const {guitarras, posts, curso} = useLoaderData()
  return (
    <>
        <main className="contenedor">
            <ListadoGuitarras 
                guitarras = {guitarras}
            />
        </main>

        <Curso 
            curso = {curso.attributes}
        />

        <section className="contenedor">
            <div className='blog'>
                <ListadoPosts 
                posts = {posts}
                />
            </div>
        </section>
    </>
  )
}

export default Index