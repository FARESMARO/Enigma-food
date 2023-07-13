import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
  const [sideNave, setSideNave] = useState(false);
  // console.log(sideNave);
  return (
    <div className=" flex justify-between items-center p-3 mx-auto">
      <div className="flex justify-center gap-3">
        <div onClick={() => setSideNave(!sideNave)} className="cursor-pointer">
          <AiOutlineMenu size={26} />
        </div>
        <h1 className="sm:text-xl lg:text-2xl text-orange-400">Enigma</h1>
        <span>food</span>
        <div className=" hidden lg:flex items-center bg-slate-300 rounded-full p-1 ">
          <p className="bg-orange-400 rounded-full p-1 text-white">Free</p>
          <p>Delivry</p>
        </div>
      </div>
      <div className="flex items-center bg-slate-300 p-1 rounded-full">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-1 focus:outline-none"
          type="text"
          placeholder="Pizza..."
        />
      </div>
      <div className=" hidden  bg-orange-400 text-white p-1 lg:flex rounded-full items-center w-16 cursor-pointer">
        <AiFillTag size={18} />
        <p>Card</p>
      </div>
      {sideNave ? (
        <div
          className="bg-black/70 fixed h-screen w-full z-10 top-0 left-0"
          onClick={() => setSideNave(!sideNave)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNave
            ? "bg-white fixed top-0 z-10 w-80 left-0 h-screen duration-100"
            : "bg-white fixed top-0 z-10 w-80 left-[-100%] h-screen duration-100"
        }
      >
        <AiOutlineClose
          size={25}
          onClick={() => setSideNave(!sideNave)}
          className="absolute right-4 top-4 bg-orange-500 rounded-full text-white cursor-pointer "
        />
        <h2 className="sm:text-xl lg:text-1xl p-3 text-orange-400">
          Enigma <span className="text-black text-xl">food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 gap-4">
            <li className="flex p-3 gap-3">
              <BsFillPersonFill size={25} /> My Account
            </li>
            <li className="flex p-3 gap-3">
              <BsFillPersonFill size={25} /> Deliver
            </li>
            <li className="flex p-3 gap-3">
              <BsFillPersonFill size={25} /> Free
            </li>
            <li className="flex p-3 gap-3">
              <BsFillPersonFill size={25} /> Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
