import React from "react";
import rohit from "./Images/r1.jpg"
import { Link } from "react-router-dom";
import cv from "./Images/cv.png"
import git from "./Images/github.svg"
import mail from "./Images/mail.svg"
import linked from "./Images/linkedin.svg"
import leet from "./Images/leetcode.svg"
import resume from "./Images/Rohit Singh Panwar Resume.pdf"

export default function About() {
  return (
    <>
      <div className="  flex flex-col gap-5 pt-3 items-center ">
          <div className=" border-4 border-double border-black rounded-xl flex flex-col  p-3 gap-5 items-center lg:w-[70%] ">
          <img src={rohit} alt="" className="h-40 w-40 lg:h-52 lg:w-52 rounded-full border-4  border-black transform-[rotate3d(1, 1, 1, 180deg)] object-cover" />
          <h1 className="italic text-lg font-semibold lg:text-center ">Hi, I’m Rohit!<br />
            I’m a passionate programmer and web developer, currently pursuing my B.TECH(C.S.E) at Global Institue of Technology and Management(MDU University). I’m particularly fond of React.js and Java, and I love creating interactive web applications that captivate users. <br />
            Feel free to connect with me—I’m eager to contribute my skills and learn from fellow developers.</h1>
        </div>

     
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl ">Developer Skills:</h1>
        <div className="list-none  flex flex-col lg:flex-row gap-2 lg:h-16  lg:gap-16 ">
        <div className="group relative">
            <li className=" text-xl border-4 border-double border-black p-1 lg:p-3  font-bold rounded-xl h-full text-center  "><code className="z-10 relative transition-all  ease-linear  duration-500 group-hover:text-white">React JS</code></li>
            <div className="absolute bg-black  bottom-0  w-0 h-0    rounded-xl border-4 border-double transition-all ease-linear    duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative ">
            <li className="  border-4 border-double border-black p-1 lg:p-3 text-xl font-bold rounded-xl h-full  text-center"><code className="z-10 relative transition-all  ease-linear  duration-500 group-hover:text-white">Javascript</code></li>
            <div className="absolute bg-black  bottom-0  w-0 h-0    rounded-xl border-4 border-double transition-all ease-linear    duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black p-1 lg:p-3 text-xl font-bold rounded-xl h-full text-center  "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">HTML/CSS</code></li>
            <div className="absolute bg-black  bottom-0  w-0 h-0    rounded-xl border-4 border-double transition-all ease-linear    duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black p-1 lg:p-3  text-xl font-bold rounded-xl  h-full"><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">TailWind CSS</code></li>
            <div className="absolute bg-black  bottom-0 w-0 h-0    rounded-xl border-4 border-double transition-all ease-in-out  duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>

        </div>
        <h1 className="font-bold text-3xl ">Programming Skills:</h1>
        <div className="list-none  flex-col gap-3 flex lg:flex-row lg:h-16 lg:gap-16">
          <div className="group relative">
            <li className="border-4 border-double border-black  lg:p-3 text-xl font-bold rounded-xl h-full text-center "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">Java</code></li>
            <div className="absolute bg-black  top-0 w-full h-0    rounded-xl border-4 border-double transition-all ease-linear  duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black  lg:p-3 text-xl   rounded-xl h-full text-center"><code className="z-10 relative font-bold transition-all ease-linear  duration-500 group-hover:text-white ">Python</code></li>
            <div className="absolute bg-black  top-0 w-full h-0    rounded-xl border-4 border-double transition-all ease-in-out  duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black  p-1 lg:p-3 text-xl font-bold rounded-xl h-full  "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">C-language</code></li>
            <div className="absolute bg-black  top-0  w-full h-0    rounded-xl border-4 border-double transition-all ease-linear    duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black   lg:p-3 text-xl font-bold rounded-xl h-full text-center "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">C++</code></li>
            <div className="absolute bg-black top-0 w-full h-0    rounded-xl border-4 border-double transition-all ease-in-out  duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>
          <div className="group relative">
            <li className="border-4 border-double border-black lg:p-3 text-xl font-bold rounded-xl h-full text-center "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">DSA</code></li>
            <div className="absolute bg-black  top-0 w-full h-0    rounded-xl border-4 border-double transition-all ease-in-out  duration-500 invisible text-xl font-bold group-hover:w-full group-hover:h-full group-hover:visible"></div>
          </div>

        </div>
        <h1 className="font-bold text-3xl ">Database Skills:</h1>
        <div className="group relative  lg:h-16">
          <li className="border-4 list-none border-double border-black lg:p-3 text-xl font-bold rounded-xl h-full p-1 "><code className="z-10 relative transition-all ease-linear  duration-500 group-hover:text-white">MYSQL</code></li>
          <div className="absolute bg-black bottom-0 w-full h-0    rounded-xl border-4 border-double transition-all ease-linear  duration-500 invisible text-xl font-bold group-hover:h-full group-hover:visible"></div>
        </div>
      </div>
      <div>
        <div className="bg-black flex flex-col items-center rounded-xl lg:pb-0 pb-8 w-screen gap-3  ">
          <h1 className="text-white font-bold text-2xl">Contact</h1>

          <div className="flex  gap-8 lg:gap-20 ">

          <a href={resume} download className=" 
     "><img src={cv} alt="" className="w-10  lg:w-16  transition-all ease-linear duration-300  hover:scale-110  hover:border-4 hover:rounded-xl hover:border-white" /></a>
         
            <Link to={"https://github.com/rohitsinghpanwar"}>
              <img src={git} alt="" className="w-10 lg:w-16  transition-all ease-linear duration-300  hover:scale-110  hover:border-4 hover:rounded-xl hover:border-white" />
            </Link>
            <Link to={"https://leetcode.com/u/rohitsinghpanwar108/"}>
              <img src={leet} alt="" className="w-10 lg:w-16  transition-all ease-linear duration-300  hover:scale-110  hover:border-4 hover:rounded-xl hover:border-white" /></Link>
            <Link to={"https://www.linkedin.com/in/rohit-singh-panwar-0b3457269/"}><img src={linked} alt="" className=" w-10 lg:w-16 transition-all ease-linear duration-300  hover:scale-110  hover:border-4 hover:rounded-xl hover:border-white" /></Link>
            
            <div className="group relative ">
              <img src={mail} alt="" className="w-10 lg:w-20 relative top-1  transition-all ease-in-out duration-500  group-hover:scale-50 group-hover:opacity-5 " />
              <h1 className="text-white font-bold  invisible   transition ease-in duration-500 absolute lg:top-6 lg:-left-12   -left-64 lg:text-xl group-hover:visible scale-75  group-hover:scale-100 pt-1 lg:pt-0 ">rohitsinghpanwar108@gmail.com</h1>
            </div>
          </div>


        </div>
      </div>
       </div>
    </>
  )
}