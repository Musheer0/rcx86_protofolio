import React from 'react'
import { projects } from '../../data'
import ProjectCard from '../Components/ProjectCard'

const Project = () => {
  
  return (
 <section className='p-5' id='projects'>
  <div className="title">
        <h1 className='text-4xl leading-none font-semibold  '>My Projects</h1>
    </div>
    <div className="projects py-2 flex flex-col gap-5 items-center justify-center">
     {projects.map((e,i)=>{
      return <ProjectCard title={e.name} info={e.description} url={e.link} key={i}/>
     })}
    </div>
 </section>
  )
}

export default Project