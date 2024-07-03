import React from 'react'

const BookCard = ({name,link}) => {
  return (

<div  className='bg-zinc-50 border-[1px] text-blue-500 font-semibold  py-4 px-3 rounded-md'>
{link && <div className="site text-xs text-blue-600 bg-blue-600/40 border-[1px] border-blue-500 w-fit px-2 py-1 rounded-full">{link.split("://")[1].split("/")[0]}</div>}
<a href={link} className='underline'>
    {name}
   </a>
</div>
  )
}

export default BookCard