import { useEffect, useRef, useState } from 'react'
import Navabar from './Components/Navabar'
import Home from './Home/Home'
import Project from './Projects/Project'
import Blog from './Blog/Blog'
import Reading from './Components/Reading'
import SocialComp from './Components/Socials'
import Books from './Components/Books'
function App() {
  return (
<>
  <Navabar/>
<main  >
    <Home/>
    <hr className='border-zinc-400 w-full lg:w-2/3'/>
    <Project/>
    <hr className='border-zinc-400 '/>
 <Blog/>
 <hr className='border-zinc-400 '/>

<div id='books' className="books">
<Reading/>
<hr className='border-zinc-400'/>

<Books/>
</div>
    </main>
    <footer className='py-3 pb-20 border-t-[1px]'>
 <SocialComp/>
      <p className='text-center py-1 text-zinc-500'>&copy; Mr.Rc | 2024</p>
    </footer>
</>
  )
}

export default App
