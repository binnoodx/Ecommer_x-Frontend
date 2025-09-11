import React from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
        <div className="main">

            <div className="navbar_top h-[5vh] bg-[#1f2937] w-screen text-white flex flex-row justify-evenly gap-2 items-center ">
                <div className="left flex flex-row items-center gap-5">


                </div>
                <div className="middle  text-[12px] lg:text-md flex lg:flex-row justify-evenly items-center w-full">

                    <h1 className="text-xl font-bold hidden lg:flex">Ecommer_x</h1>

                    <ul className="flex flex-row items-center gap-5">
                        <li  className="hover:underline cursor-pointer lg:text-md">Hot Deals</li>
                        <li  className="hover:underline cursor-pointer">Sale</li>
                        <li  className="hover:underline cursor-pointer">Help and Support</li>
                        <li  className="hover:underline cursor-pointer">Privacy & Policy</li>
                    </ul>



                <div className="right hidden lg:flex ">

                    <ul className="flex flex-row items-center gap-5">
                        <button
                            className="block w-full cursor-pointer text-black rounded-sm bg-yellow-400 px-4 py-2 text-sm  transition hover:scale-105"
                        >
                            Login
                        </button>
                        <button
                            className="block w-full cursor-pointer text-black rounded-sm bg-yellow-400 px-4 py-2 text-sm  transition hover:scale-105"
                        >
                            Signup
                        </button>
                    </ul>


                </div>
                </div>





                <Dropdown className="bg-[#252b33] text-white px-1 text-sm py-2 lg:hidden" label="More" dismissOnClick={false}>
                    <DropdownItem className="text-white px-5">Hot deals</DropdownItem>
                    <DropdownItem className="text-white  px-5">Sale</DropdownItem>
                    <DropdownItem  className="text-white px-5">Login</DropdownItem>
                    <DropdownItem  className="text-white px-5">Sign Up</DropdownItem>
                </Dropdown>

                



            </div>
            <div className="navbar_bottom h-[7vh]  bg-[#252b33] w-screen text-white flex flex-row justify-evenly items-center ">
                

            
                    <h1 className="text-xl font-bold lg:hidden">Ecommer_x</h1>
                    <div className="right flex flex-row gap-5 items-center h-full ">
                        <input className="border px-5 text-sm rounded-sm py-0.5 lg:w-[60vw] lg:py-2" type="text" placeholder="Search" name="" id="" />
                        <FaShoppingCart  className="scale-200 cursor-pointer" />
                    </div>



            </div>
            

        </div>



        </>
    )
}

export default Navbar