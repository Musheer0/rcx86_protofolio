import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials =[
    {
      name: "twitter/x",
      icon: <FaXTwitter />,
      url: "https://twitter.com/rcx86",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/HACKE-RC",
    },
    {
      name: "Discord: rc.hq",
      icon: <FaDiscord />,
      url: null, // Replace with Discord URL if available
    },
    {
      name: "Airchat: rcx86",
      icon: null,
      url: null, // Replace with Airchat URL if available
    },
    {
      name: "email",
      icon: <BiLogoGmail />,
      url: "mailto:crretsim@gmail.com",
    },
  ];
  
const SocialComp= () => {
  return (
    <section className='p-5'>
        <h3 className='text-xl text-center font-semibold'>Lets Chat</h3>
       <div className="socials flex flex-wrap gap-2 items-center justify-center w-full">
       {socials.map((e,i)=>{
            return <a href={e.url ? e.url: '#'}>
              <div key={i} className='flex items-center justify-center  gap-1 px-2 py-1 rounded-md border-[1px] bg-zinc-100 '>
               <span> {e.icon}</span>
                <p>{e.name}</p>
            </div>
            </a>
        })}
       </div>
    </section>
  )
}

export default SocialComp