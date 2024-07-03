import React, { useEffect, useState } from 'react'
import { routes } from '../../routes'

const Navabar = () => {
  const [isactive ,setIsactive] = useState(window.location.hash)
 useEffect(()=>{
    const handleHashChange = () => {
     setIsactive(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  
 },[])
  return (
<nav className='w-fit px-3 py-2 rounded-full fixed bottom-2 left-1/2 -translate-x-1/2 bg-zinc-900   z-[99999]  flex items-center justify-end'>
        <div className="links flex items-center gap-4">
         {routes.map((e,i)=>{
            return <a className={`font-semibold transition-al text-zinc-50 ease-in-out duration-300 capitalize px-3 py-1 ${isactive===e.path && 'bg-zinc-200 text-zinc-950  rounded-full border-[1px] border-zinc-300'}`} key={i} href={e.path}>{e.name}</a>
         })}
        </div>
    </nav>
  )
}

export default Navabar