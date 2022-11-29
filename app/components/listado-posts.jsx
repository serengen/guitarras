import React from 'react'
import Post from './post'


function ListadoPosts({posts}) {
  return (
    <>
      <div className='blog'>
      <h2 className='heading'>Blog</h2>
        {posts?.map( post =>(
        <Post
        key={post.id}
        post={post.attributes}
        />
      ))}
      </div>
    </>
  )
}

export default ListadoPosts