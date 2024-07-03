import React from 'react'

const BlogCard = ({name, info, url}) => {
  return (
    <div className='p-5 bg-gray-50 text-green-600 rounded-md  border-[1px]'>
        <a href={url} target='_blank'>
        <h3 className='text-xl font-semibold underline w-full lg:w-2/3'>
          {name}
          </h3>
        </a>
    </div>
  )
}

export default BlogCard