import React from "react";
import bg from "./Images/boy.png"
import resume from "./Images/Rohit Singh Panwar Resume.pdf"
import { TypeAnimation } from "react-type-animation";

export default function Home(){
    return(
    <>
    <div className=" h-screen bg-gradient-to-l from-blue-300 to-red-300 flex lg:flex-row flex-col items-center  ">
    <div className="relative group  h-max lg:h-full ">
    <img src={bg} alt="" className=" transition-all ease-in-out duration-500 scale-90  pt-10 hover:drop-shadow-[0_5px_15px_rgba(255,255,255,1.0)] group-hover:scale-100 lg:h-full lg:pt-0 object-cover "   /> 
    <button><a href={resume} download className="text-black font-bold border-4  p-1 lg:p-3 lg:text-3xl rounded-full absolute bg-gradient-to-t from-yellow-300 to-orange-500 italic
     transition-all ease-in-out duration-500 group-hover:scale-110 top-[70%] left-[40%] lg:top-[70%] lg:left-[40%] group-hover:top-[65%]
     group-hover:drop-shadow-[0_20px_10px_rgba(255,255,51,1.0)]  lg:group-hover:drop-shadow-[0_30px_8px_rgba(255,255,51,1.0)] lg:group-hover:top-[60%]">Resume</a></button>
    </div> 
    <div className=" flex flex-col
    lg:justify-center items-center lg:gap-10 lg:w-[60%]  " >
     <h1 className="italic  font-black text-white text-2xl lg:text-5xl">I am Rohit Singh Panwar </h1>
         <TypeAnimation
            sequence={[
                'I am a Programmer', 1000,
                'I am a Web Developer', 1000,   
            ]}
            wrapper="h1"
            speed={50}
            style={{ display: 'flex', fontStyle:"italic",
            fontWeight:"900",  color:"white",}}
            repeat={Infinity}
            className=" text-2xl lg:text-5xl "
        />  
    </div>
   
    </div>
    
    </>
    )
}