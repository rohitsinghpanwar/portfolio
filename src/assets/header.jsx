import React from "react";
import {Link,NavLink} from "react-router-dom"
// import "./style.css"

export default function Header(){
    return (
        <>
        <div className="bg-black bg-opacity-70   flex  justify-evenly lg:text-3xl font-bold text-white p-3 text-lg " >
         <NavLink to={"/home"} className={({isActive})=>isActive?"underline ":"" } > Home</NavLink>   
         
         <NavLink to={"/about"} className={({isActive})=>isActive?"underline":""} >About</NavLink>
         <NavLink to={"/projects"} className={({isActive})=>isActive?"underline":""} >Projects</NavLink>
       
        </div>

        </>
    )
}