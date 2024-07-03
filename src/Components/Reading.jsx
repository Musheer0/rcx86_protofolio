import React from 'react'
import BookCard from './BookCard'
const readingdata =
  [
    {
      "name": "Naval on JRE (this changed me more than anything)",
      "link": "https://www.youtube.com/watch?v=3qHkcs3kG44"
    },
    {
      "name": "What you'll wish you'd known - Advice for HS Students",
      "link": "https://www.paulgraham.com/hs.html"
    },
    {
      "name": "How to Fail at Almost Everything and Still Win Big",
      "link": "https://www.youtube.com/watch?v=uy6-fq8PwNk"
    },
    {
      "name": "Steve Jobs Stanford Commencement Address",
      "link": "https://www.youtube.com/watch?v=UF8uR6Z6KLc"
    },
    {
      "name": "How to be successful - Sam Altman",
      "link": "https://blog.samaltman.com/how-to-be-successful"
    },
    {
      "name": "Pmarca Guide to Career Planning",
      "link": "https://pmarchive.com/guide_to_career_planning_part0.html"
    },
    {
      "name": "Get good at everything, quickly",
      "link": "https://s0md3v.github.io/blog/get-good-quickly"
    },
    {
      "name": "The Five Laws Of Stupidity",
      "link": "https://www.youtube.com/watch?v=3O9FFrLpinQ"
    },
    {
      "name": "How to do Great Work",
      "link": "https://www.paulgraham.com/greatwork.html"
    },
    {
      "name": "Happiness - Naval",
      "link": "https://nav.al/happiness"
    },
    {
      "name": "Life is not short",
      "link": "https://dkb.show/post/life-is-not-short"
    }
  ]
    
const Reading = () => {
  return (
    <section className='w-full p-5'>
        <h1 className='text-4xl font-semibold'>
            Reading
        </h1>
         <p className='text-md w-full '>
         I'll try to keep this page updated with the most interesting things that I've read.
         </p>
       <div className="books flex flex-col gap-5">
       {Array.from(readingdata).map((e,i)=>{
            return <BookCard name={e.name} link={e.link} key={i}/>
        })}
       </div>
    </section>
  )
}

export default Reading