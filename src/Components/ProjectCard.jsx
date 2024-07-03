import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const ProjectCard = ({title, info, url}) => {
  return (
      <div  className="project-card group   overflow-hidden  border-2 p-3 cursor-pointer hover:shadow-none transition-all ease-in-out duration-300 hover:bg-rose-600 text-zinc-50 rounded-lg  shadow-md gap-5 flex-col  justify-center w-full flex">

        <a target='_blank' href={url}>
 <div className="innerdiv  relative py-2">
    <div className="card ">
    <h1 className='text-3xl leading-nonep-1 flex items-center gap-1'>{title}
        <span>
        </span>
         {/* for smaller screen*/}
         <div className="icon block  sm:hidden transition-all ease-in-out duration-300   bg-zinc-50 shadow-md p-1 text-sm  scale-0 rounded-full group-hover:scale-100  border-2 text-black">
    <FiArrowRight />
    </div>
    </h1>
    </div>
    <div className="info flex-1">
     <p className='w-full lg:w-2/3'>
     {info}
     </p>
    </div>
    {/* for larger screen*/}
    <div className="icon hidden  sm:block transition-all ease-in-out duration-300 absolute top-1/2 -translate-y-1/2 right-10 bg-zinc-50 shadow-md p-6 text-lg translate-x-full group-hover:translate-x-0 scale-0 rounded-full group-hover:scale-100  border-2 text-black">
    <FiArrowRight />
    </div>
       
    </div>

 </a>
    </div>
  )
}

export default ProjectCard