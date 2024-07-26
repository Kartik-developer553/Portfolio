import React from "react";
import array from "../assets/portfolio/arrayDestruct.jpg";
import installnode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactscroll from "../assets/portfolio/reactParallax.jpg";
import reactsmooth from "../assets/portfolio/reactSmooth.jpg";
import weather from "../assets/portfolio/reactWeather.jpg";
import usestate from "../assets/portfolio/usestate.jpg";
const Projects = () => {
  const data = [
    {
      id: 1,
      src: array,
    },
    {
      id: 2,
      src: installnode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactscroll,
    },
    {
      id: 5,
      src: reactsmooth,
    },
    {
      id: 6,
      src: weather,
    },
    {
      id: 7,
      src: usestate,
    },
  ];
  return (
    <div name="portfolio" className=" text-white w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
      <div className="flex flex-col max-w-screen-lg mx-auto justify-center h-full p-12">
        <div>
          <p className="text-4xl font-bold py-7">Portfolio</p>
          <p className="py-4 text-xl">Check out some of my work</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {data.map(({ id, src }) => {
            return (
              <div  key={id} className="shadow-md shadow-gray-600 rounded-md">
                <img
                  src={src}
                  alt=""
                  className="hover:scale-105 duration-200"
                />
                <div className="flex justify-around">
                  <button className="p-3">Demo</button>
                  <button className="p-3 ">Code</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
