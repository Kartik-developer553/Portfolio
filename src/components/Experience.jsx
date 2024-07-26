import React from 'react'
import css from "../assets/css.png"
import git from "../assets/github.png"
import graph from "../assets/graphql.png"
import html from "../assets/html.png"
import java from "../assets/javascript.png"
import next from "../assets/nextjs.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tail from "../assets/tailwind.png"
const Experience = () => {
  const data=[
    {
      id:1,
      src:css,
      title:"css",
    },
    {
      id:2,
      src:git,
      title:"Github"
    },
    {
      id:3,
      src:graph,
      title:"Graphql"
    },
    {
      id:4,
      src:html,
      title:"HTML"
    },
    {
      id:5,
      src:java,
      title:"JavaScript"
    },
    {
      id:6,
      src:next,
      title:"Next.js"
    },
    {
      id:7,
      src:node,
      title:"Node.js"
    },
    {
      id:8,
      src:react,
      title:"React.js"
    },
    {
      id:9,
      src:tail,
      title:"Tailwind"
    },
  ]
  return (
    <div name="experience" className=" text-white w-full h-screen bg-gradient-to-b from-black to-gray-800 bg">
        <div className="flex flex-col max-w-screen-lg mx-auto justify-center h-full p-12">
          <div>
            <p className='text-4xl font-bold my-5'>Experience </p>
            <p className='text-xl my-10'>These are the technologies I've workd with</p>
          </div>
          <div className='grid grid-cols-3 gap-7'>
            {
              data.map(({id,src,title})=>{
                return <div key={id} className=' hover:scale-105 rounded-md duration-300 cursor-pointer shadow-md shadow-gray-500 flex  flex-col  items-center'>
                <img src={src} alt="" className='w-20'/>
                <p>{title}</p>
              </div>
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Experience;