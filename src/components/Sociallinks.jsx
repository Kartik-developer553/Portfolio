import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Sociallinks = () => {
    const data=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:"https://www.linkedin.com/in/kartik-kamra-9a8a4a240/"
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}></FaGithub>
                </>
            ),
            href:"https://www.linkedin.com/in/kartik-kamra-9a8a4a240/"
        },
        {
            id:3,
            child:(
                <>
                Mail <CiMail size={30}></CiMail>
                </>
            ),
            href:"mailto:officialkartik123@gmail.com"
        },
    ]
  return (
    <div className='fixed top-[40%] left-0'>
        <ul className='flex flex-col gap-1'>
          {
            data.map(({id,child,href})=>{
                return <li key={id}><a href={href} 
               target='_blank' className=' border-2 duration-300  -translate-x-20 hover:-translate-x-0 flex cursor-pointer justify-between items-center gap-1 text-white text-lg p-2 rounded-lg bg-gray-700'>{child}</a></li>
            })
          }
        </ul>
    </div>
  )
}
export default Sociallinks;