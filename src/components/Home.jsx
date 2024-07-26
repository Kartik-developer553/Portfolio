import React from "react";
import heroimage from "../assets/heroimage.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black to-gray-800">
      <div className=" flex flex-col justify-center items-center h-full px-9 gap-7 md:flex-row max-w-screen-lg mx-auto">
        <div className="right flex flex-col gap-5 justify-start">
            <h2 className="font-bold text-4xl text-white">I'm a Full Stack Developer</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi inventore aliquam neque odit, ipsum quasi eum perspiciatis aliquid quis itaque. Mollitia, maiores animi. Ullam voluptatum asperiores, praesentium veritatis officia debitis magni mollitia, dolor nostrum aliquid at numquam eos rem natus ut facilis fugit cupiditate vitae earum deserunt officiis eum. Quasi.</p>
            <div className=" ">
                <Link to="portfolio" smooth duration={500} className="shadow-sm  shadow-blue-200  flex items-center text-white group text-md bg-gradient-to-r from-zinc-600 to-sky-500 px-3 py-2 rounded-lg w-fit cursor-pointer hover:shadow-md hover:shadow-blue-500 duration-300">
                    <p className="text-md font-bold">Portfolio</p>
                    <BiRightArrowAlt className="mx-2 group-hover:rotate-90 duration-300" size={20} />
                </Link>
            </div>
        </div>
        <div className=" left "> 
        <img src={heroimage} alt="" className=" rounded-xl object-cover w-[900px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
