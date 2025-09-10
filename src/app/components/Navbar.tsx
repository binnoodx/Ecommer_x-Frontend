import React from "react";
import { Dropdown, DropdownItem } from "flowbite-react";


const Navbar = () => {
    return (
        <>

            <div className="navbar h-[7vh] bg-[#1f2937] w-screen text-white flex flex-row justify-evenly items-center ">
                <div className="left flex flex-row items-center gap-5">

                    <h1 className="text-xl font-bold">Ecommer_x</h1>
                    <input className="border px-5 rounded-sm py-2" type="text" placeholder="Search" name="" id="" />

                </div>
                <div className="middle max-sm:hidden">

                    <ul className="flex flex-row items-center gap-5">
                        <li  className="hover:underline cursor-pointer">Hot Deals</li>
                        <li  className="hover:underline cursor-pointer">Sale</li>
                        <li  className="hover:underline cursor-pointer">Help and Support</li>
                    </ul>



                </div>
                <div className="right max-sm:hidden ">

                    <ul className="flex flex-row items-center gap-5">
                        <button
                            className="block w-full text-black rounded-sm bg-yellow-400 p-4 text-sm  transition hover:scale-105"
                        >
                            Login
                        </button>
                        <button
                            className="block w-full text-black rounded-sm bg-yellow-400 p-4 text-sm  transition hover:scale-105"
                        >
                            Signup
                        </button>
                    </ul>


                </div>





                <Dropdown className="bg-[#1f2937] px-10 py-2 lg:hidden" label="More" dismissOnClick={false}>
                    <DropdownItem>Hot deals</DropdownItem>
                    <DropdownItem>Sale</DropdownItem>
                    <DropdownItem>Login</DropdownItem>
                    <DropdownItem>Sign Up</DropdownItem>
                </Dropdown>



            </div>


        </>
    )
}

export default Navbar