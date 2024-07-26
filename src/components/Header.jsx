import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"
const Header = () => {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between bg-black w-full h-16 items-center p-4 sticky top-0">
      <div>
        <h1 className="text-3xl font-bold font-signature text-white">Kartik</h1>
      </div>
      <div
        className="text-2xl font-bold cursor-pointer text-white md:hidden z-20"
        onClick={() => setnav(!nav)}
      >
        {nav ? <IoClose /> : <RxHamburgerMenu />}
      </div>
      <ul className="hidden md:flex md:gap-6 mx-12">
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="cursor-pointer text-gray-500 hover:scale-105 duration-200 capitalize hover:underline"
        >
            <Link to={link} smooth duration={500} >{link}</Link>
        </li>
      ))}
    </ul>
      {nav && (
        <ul className="flex flex-col gap-5 justify-center items-center bg-black w-full h-screen absolute inset-0">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className=" cursor-pointer text-gray-500 hover:scale-105 duration-200 capitalize text-3xl "
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Header;
