import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between h-[10vh] item-center shadow-md shadow-sky-200">
                <div>
                    <NavLink to='/home'>
                    <div>
                        <p className="text-sky-600 font-extrabold pt-5 pl-4 text-xl customFont">TEAM KS</p>
                    </div>
                        </NavLink>
                </div>
                <div className="flex justify-end pr-8 text-xl">
                 <div className="pl-4">
                 <a href="./home">
                    <p className="text-xl font-semibold pt-5 text-sky-500">Home</p>
                    </a>
                 </div>
                 <div className="pl-6">
                 <a href="https://parivahan.gov.in/analytics/">
                    <p className="text-xl font-semibold pt-5 text-sky-500">Analysis</p>
                    </a>
                 </div>
                
                 <div className="pl-6">
                 <a href="/">
                    <p className="text-xl font-bold pt-5 text-sky-500 ">Login/Register</p>
                    </a>
                 </div>
                 
                 
                 

                </div>
                
            </div>
        </>
  )
}

export default Navbar
