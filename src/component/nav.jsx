import React  from "react";
import logo from "../Checklist-icon.png"
const Nav = () => {
    return (
        <>
      
        <nav className="bg-gray-800  h-16   space-x-4 border-solid border-2 border-indigo-600">
            <div className="max-w-7xl h-16  mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-1">


                <div className='h-14 place-items-center text-2xl mt-1 grid grid-cols-6 gap-1'>
                    <span className="text-white ">ToDo List</span>
                    <div className='w-10 mt-2 '>
                   <img src= {logo} alt="Logo"/>
                    </div>
                
                </div>
                    <div className='h-14 place-items-center text-2xl mt-3  text-right'>
                    <span className="text-white hover:text-blue-600 ">Hi, Aman</span></div>
            </div>
        </nav>
        </>
    );
};
export default Nav;