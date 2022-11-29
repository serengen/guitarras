import { useLoaderData,Outlet } from '@remix-run/react'
import React from 'react'
import ListadoPosts from '~/components/listado-posts'
import { getPosts } from '~/models/posts.server'

function Blog() {


  return (
    <main className='contenedor'>
      <Outlet />
    </main>
  )
}

export default Blog