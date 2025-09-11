"use client"

import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";


const ProductCard = (props:any)=> {

    

   
    


  return (
<div className="group m-2 rounded-sm bg-slate-300 relative block overflow-hidden">


  <img
    src={props.image}
    alt=""
    className="h-[25vh] w-full  object-contain transition duration-500 group-hover:scale-105 sm:h-[20vh]"
  />

  <div className="relative  min-h-[25vh]  bg-slate-300 p-2">
    
    <div className="badges flex flex-row gap-2">
    <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> New </span>
      <span className="bg-purple-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> {props.category} </span>
    
    </div>



    <h3 className="mt-4  text-sm lg:text-lg font-medium text-gray-900">{props.title}</h3>

    <p className="mt-1.5 text-md text-gray-700">Rs. {props.price}</p>

    <form className="mt-4 flex flex-row gap-2 w-full">
      <button
        className=" w-full text-center flex justify-center items-center rounded-sm bg-yellow-400 lg:p-4 text-sm  transition hover:scale-105"
      >
        <FaCartPlus/>
      </button>
      <button 
        className=" w-full text-center flex justify-center items-center rounded-sm bg-yellow-400 lg:p-4 p-4 py-2 text-sm  transition hover:scale-105"
      >
        Buy
      </button>
    </form>
  </div>
</div>
  );
}

export default ProductCard