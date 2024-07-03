import React from 'react'
import { blogs } from '../../blog'
import BlogCard from '../Components/BlogCard'

const Blog = () => {
    
  return (
 <section id='blog' className='p-5'>
    <h1 className='text-4xl py-3 font-semibold'> My Blogs</h1>
 <div className="blogs flex flex-col gap-5">
 {blogs.map((e,i)=>{
        return <BlogCard name={e.name} info={e.info} url={e.link} key={i}/>
    })}
 </div>
 <a className='py-2 underline text-red-600' target='_blank' href='https://de-engineer.github.io/'>You can find all blogs here.</a>
 </section>
)
}

export default Blog